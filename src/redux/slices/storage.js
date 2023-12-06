import { createSlice } from "@reduxjs/toolkit";
// utils
import axios from "../../utils/axios";

// ----------------------------------------------------------------------

const initialState = {
	isLoading: false,

	download: null,
	downLoadError: null,

	delete: null,
	deleteError: null,
};

//the slice
const slice = createSlice({
	name: "storage",
	initialState,
	reducers: {
		// START LOADING
		startLoading(state) {
			state.isLoading = true;
		},

		// STOP LOADING
		stopLoading(state) {
			state.isLoading = false;
		},

		//DOWNLOAD FILE
		downloadFile(state, action) {
			state.isLoading = false;
			state.download = action.payload;
		},

		downLoadFileError(state, action) {
			state.isLoading = false;
			state.downLoadError = action.payload;
		},

		//DELETE FILE
		deleteFile(state, action) {
			state.isLoading = false;
			state.delete = action.payload;
		},

		deleteFileError(state, action) {
			state.isLoading = false;
			state.deleteError = action.payload;
		}
	},
});

//export

// Reducer
export default slice.reducer;

// Actions
export const { addRecipients, sendMessage, resetActiveConversation } =
	slice.actions;

// ---

//The Actions
// =========================

//download file
export function downloadFile(userID, filename, token) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		console.log("Download", userID, filename, token);

		try {
			const response = await axios.get(
				`http://localhost:9700/api/storage/${userID}/download/${filename}`,
				{
					headers: {
						Authorization: token,
					},
					responseType: "blob", // Important for handling binary data
				}
			);

			// Create a URL for the file
			const url = window.URL.createObjectURL(new Blob([response.data]));

			// Create a link and download the file
			const link = document.createElement("a");
			link.href = url;
			link.setAttribute("download", filename); // or any other extension
			document.body.appendChild(link);
			link.click();

			link.parentNode.removeChild(link);
			window.URL.revokeObjectURL(url);

			dispatch(slice.actions.downloadFile(response));
			return response;
		} catch (error) {
			dispatch(slice.actions.downLoadFileError(error));
			throw error.response;
		} finally {
			dispatch(slice.actions.stopLoading()); // Ensure loading is stopped even if there's an error
		}
	};
}

//delete File
export function deleteFile(userID, filename, token) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());

		try {
			const response = await axios.delete(
				`http://localhost:9700/api/storage/${userID}/delete/${filename}`,
				{
					headers: {
						Authorization: token,
					},
				}
			);

			dispatch(slice.actions.deleteFile(response));
			return response
		} catch (error) {
			dispatch(slice.actions.deleteFileError(error));
			throw error.response;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};

}
