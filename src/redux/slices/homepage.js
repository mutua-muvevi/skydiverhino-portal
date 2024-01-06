import { createSlice } from "@reduxjs/toolkit";
// utils
import axios from "../../utils/axios";
import { isFile } from "../../utils/is-file";

// ----------------------------------------------------------------------

const initialState = {
	isLoading: false,

	//homepage
	homepage: null,
	homepageError: null,

	//edit
	editHomepage: null,
	editHomepageError: null,

	//fetch homepage
	fetchHomepage: null,
	fetchHomepageError: null,
};

//the slice
const slice = createSlice({
	name: "homepage",
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

		//fetch homepage
		fetchHomepageSuccess(state, action) {
			state.isLoading = false;
			state.fetchHomepage = action.payload;
		},

		fetchHomepageError(state, action) {
			state.isLoading = false;
			state.fetchHomepageError = action.payload;
		},

		//create homepage
		createHomepageSuccess(state, action) {
			state.isLoading = false;
			state.homepage = action.payload;
		},

		createHomepageError(state, action) {
			state.isLoading = false;
			state.homepageError = action.payload;
		},

		//edit homepage
		editHomepageSuccess(state, action) {
			state.isLoading = false;
			state.editHomepage = action.payload;
		},

		editHomepageError(state, action) {
			state.isLoading = false;
			state.editHomepageError = action.payload;
		},
	},
});

// Reducer
export default slice.reducer;

// Actions
export const { startLoading, stopLoading } = slice.actions;

// ----------------------------------------------------------------------

export function fetchHomepage() {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios.get(
				`http://localhost:8100/api/homepage/fetch/}`,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			const data = await response.data;
			dispatch(slice.actions.getServiceSuccess(data));
			return data;

		} catch (error) {
			dispatch(slice.actions.fetchHomepageError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}

// ----------------------------------------------------------------------
//create homepage
export function createHomepage(userID, token, values) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios.post(
				`http://localhost:8100/api/homepage/${userID}/post`,
				values,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: token,
					},
				}
			);

			const data = await response.data;
			dispatch(slice.actions.createHomepageSuccess(data));
			return data;

		} catch (error) {
			dispatch(slice.actions.createHomepageError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}


// ----------------------------------------------------------------------
//edit homepage
export function editHomepage(userID, token, values) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios.post(
				`http://localhost:8100/api/homepage/${userID}/edit`,
				values,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: token,
					},
				}
			);

			const data = await response.data;
			dispatch(slice.actions.editHomepageSuccess(data));
			return data;

		} catch (error) {
			dispatch(slice.actions.editHomepageError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}