import { createSlice } from "@reduxjs/toolkit";
// utils
import axios from "../../utils/axios";

// ----------------------------------------------------------------------

const initialState = {
	isLoading: false,

	//service
	service: null,
	serviceError: null,

	services: null,
	servicesError: null,

	postService: null,
	postServiceError: null,

	editService: null,
	editServiceError: null,

	deleteService: null,
	deleteServiceError: null,

	deleteManyServices: null,
	deleteManyServicesError: null,

	//detail
	detail: null,
	detailError: null,

	details: null,
	detailsError: null,

	postDetails: null,
	postDetailsError: null,

	editDetails: null,
	editDetailsError: null,

	deleteDetails: null,
	deleteDetailsError: null,

	deleteManyDetails: null,
	deleteManyDetailsError: null,

	//prices
	price: null,
	priceError: null,

	prices: null,
	pricesError: null,

	postPrice: null,
	postPriceError: null,

	editPrice: null,
	editPriceError: null,

	deletePrice: null,
	deletePriceError: null,

	deleteManyPrices: null,
	deleteManyPricesError: null,

	//faq
	faq: null,
	faqError: null,

	faqs: null,
	faqsError: null,

	postFaq: null,
	postFaqError: null,

	editFaq: null,
	editFaqError: null,

	deleteFaq: null,
	deleteFaqError: null,

	deleteManyFaqs: null,
	deleteManyFaqsError: null,

	//requirements
	requirements: null,
	requirementsError: null,

	postRequirements: null,
	postRequirementsError: null,

	editRequirements: null,
	editRequirementsError: null,

	deleteRequirements: null,
	deleteRequirementsError: null,

	deleteManyRequirements: null,
	deleteManyRequirementsError: null,
};

//the slice
const slice = createSlice({
	name: "services",
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

		//SET SERVICE
		setService(state, action) {
			state.isLoading = false;
			state.service = action.payload;
		},

		setServiceError(state, action) {
			state.isLoading = false;
			state.serviceError = action.payload;
		},

		//SERVICE
		getServiceSuccess(state, action) {
			state.isLoading = false;
			state.service = action.payload;
		},

		getServiceError(state, action) {
			state.isLoading = false;
			state.serviceError = action.payload;
		},

		//SERVICES
		getServicesSuccess(state, action) {
			state.isLoading = false;
			state.services = action.payload;
		},

		getServicesError(state, action) {
			state.isLoading = false;
			state.servicesError = action.payload;
		},

		//POST SERVICE
		postServiceSuccess(state, action) {
			state.isLoading = false;
			state.postService = action.payload;
		},

		postServiceError(state, action) {
			state.isLoading = false;
			state.postServiceError = action.payload;
		},

		//EDIT SERVICE
		editServiceSuccess(state, action) {
			state.isLoading = false;
			state.editService = action.payload;
		},

		editServiceError(state, action) {
			state.isLoading = false;
			state.editServiceError = action.payload;
		},

		//DELETE SERVICE
		deleteServiceSuccess(state, action) {
			state.isLoading = false;
			state.deleteService = action.payload;
		},

		deleteServiceError(state, action) {
			state.isLoading = false;
			state.deleteServiceError = action.payload;
		},

		//DELETE MANY SERVICES
		deleteManyServicesSuccess(state, action) {
			state.isLoading = false;
			state.deleteManyServices = action.payload;
		},

		deleteManyServicesError(state, action) {
			state.isLoading = false;
			state.deleteManyServicesError = action.payload;
		},

		//DETAIL
		getDetailSuccess(state, action) {
			state.isLoading = false;
			state.detail = action.payload;
		},

		getDetailError(state, action) {
			state.isLoading = false;
			state.detailError = action.payload;
		},

		//DETAILS
		getDetailsSuccess(state, action) {
			state.isLoading = false;
			state.details = action.payload;
		},

		getDetailsError(state, action) {
			state.isLoading = false;
			state.detailsError = action.payload;
		},

		//POST DETAIL
		postDetailSuccess(state, action) {
			state.isLoading = false;
			state.postDetail = action.payload;
		},

		postDetailError(state, action) {
			state.isLoading = false;
			state.postDetailError = action.payload;
		},

		//EDIT DETAIL
		editDetailSuccess(state, action) {
			state.isLoading = false;
			state.editDetail = action.payload;
		},

		editDetailError(state, action) {
			state.isLoading = false;
			state.editDetailError = action.payload;
		},

		//DELETE DETAIL
		deleteDetailSuccess(state, action) {
			state.isLoading = false;
			state.deleteDetail = action.payload;
		},

		deleteDetailError(state, action) {
			state.isLoading = false;
			state.deleteDetailError = action.payload;
		},

		//DELETE MANY DETAILS
		deleteManyDetailsSuccess(state, action) {
			state.isLoading = false;
			state.deleteManyDetails = action.payload;
		},

		deleteManyDetailsError(state, action) {
			state.isLoading = false;
			state.deleteManyDetailsError = action.payload;
		},

		//PRICE
		getPriceSuccess(state, action) {
			state.isLoading = false;
			state.price = action.payload;
		},

		getPriceError(state, action) {
			state.isLoading = false;
			state.priceError = action.payload;
		},

		//PRICES
		getPricesSuccess(state, action) {
			state.isLoading = false;
			state.prices = action.payload;
		},

		getPricesError(state, action) {
			state.isLoading = false;
			state.pricesError = action.payload;
		},

		//POST PRICE
		postPriceSuccess(state, action) {
			state.isLoading = false;
			state.postPrice = action.payload;
		},

		postPriceError(state, action) {
			state.isLoading = false;
			state.postPriceError = action.payload;
		},

		//EDIT PRICE
		editPriceSuccess(state, action) {
			state.isLoading = false;
			state.editPrice = action.payload;
		},

		editPriceError(state, action) {
			state.isLoading = false;
			state.editPriceError = action.payload;
		},

		//DELETE PRICE
		deletePriceSuccess(state, action) {
			state.isLoading = false;
			state.deletePrice = action.payload;
		},

		deletePriceError(state, action) {
			state.isLoading = false;
			state.deletePriceError = action.payload;
		},

		//DELETE MANY PRICES
		deleteManyPricesSuccess(state, action) {
			state.isLoading = false;
			state.deleteManyPrices = action.payload;
		},

		deleteManyPricesError(state, action) {
			state.isLoading = false;
			state.deleteManyPricesError = action.payload;
		},

		//FAQ
		getFaqSuccess(state, action) {
			state.isLoading = false;
			state.faq = action.payload;
		},

		getFaqError(state, action) {
			state.isLoading = false;
			state.faqError = action.payload;
		},

		//FAQS
		getFaqsSuccess(state, action) {
			state.isLoading = false;
			state.faqs = action.payload;
		},

		getFaqsError(state, action) {
			state.isLoading = false;
			state.faqsError = action.payload;
		},

		//POST FAQ
		postFaqSuccess(state, action) {
			state.isLoading = false;
			state.postFaq = action.payload;
		},

		postFaqError(state, action) {
			state.isLoading = false;
			state.postFaqError = action.payload;
		},

		//EDIT FAQ
		editFaqSuccess(state, action) {
			state.isLoading = false;
			state.editFaq = action.payload;
		},

		editFaqError(state, action) {
			state.isLoading = false;
			state.editFaqError = action.payload;
		},

		//DELETE FAQ
		deleteFaqSuccess(state, action) {
			state.isLoading = false;
			state.deleteFaq = action.payload;
		},

		deleteFaqError(state, action) {
			state.isLoading = false;
			state.deleteFaqError = action.payload;
		},

		//DELETE MANY FAQS
		deleteManyFaqsSuccess(state, action) {
			state.isLoading = false;
			state.deleteManyFaqs = action.payload;
		},

		deleteManyFaqsError(state, action) {
			state.isLoading = false;
			state.deleteManyFaqsError = action.payload;
		},

		//REQUIREMENTS
		getRequirementsSuccess(state, action) {
			state.isLoading = false;
			state.requirements = action.payload;
		},

		getRequirementsError(state, action) {
			state.isLoading = false;
			state.requirementsError = action.payload;
		},

		//POST REQUIREMENTS
		postRequirementsSuccess(state, action) {
			state.isLoading = false;
			state.postRequirements = action.payload;
		},

		postRequirementsError(state, action) {
			state.isLoading = false;
			state.postRequirementsError = action.payload;
		},

		//EDIT REQUIREMENTS
		editRequirementsSuccess(state, action) {
			state.isLoading = false;
			state.editRequirements = action.payload;
		},

		editRequirementsError(state, action) {
			state.isLoading = false;
			state.editRequirementsError = action.payload;
		},

		//DELETE REQUIREMENTS
		deleteRequirementsSuccess(state, action) {
			state.isLoading = false;
			state.deleteRequirements = action.payload;
		},

		deleteRequirementsError(state, action) {
			state.isLoading = false;
			state.deleteRequirementsError = action.payload;
		},

		//DELETE MANY REQUIREMENTS
		deleteManyRequirementsSuccess(state, action) {
			state.isLoading = false;
			state.deleteManyRequirements = action.payload;
		},

		deleteManyRequirementsError(state, action) {
			state.isLoading = false;
			state.deleteManyRequirementsError = action.payload;
		},
	},
});

// Reducer
export default slice.reducer;

// Actions
export const { startLoading, stopLoading } = slice.actions;

// ----------------------------------------------------------------------

//----------------------------services--------------------------------------------
//SET SERVICE FROM ALL SERVICES
export function setService(service) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());

		try {
			dispatch(slice.actions.setService(service));
		} catch (error) {
			dispatch(slice.actions.getServiceError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}


//SERVICE
export function fetchSingleService(serviceID) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());

		try {
			const response = await axios.get(
				`http://localhost:8100/api/service/fetch/single/${serviceID}`,
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
			dispatch(slice.actions.getServiceError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}

//SERVICES
export function fetchAllServices() {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());

		try {
			const response = await axios.get(
				"http://localhost:8100/api/service/fetch/all",
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			const data = await response.data;
			dispatch(slice.actions.getServicesSuccess(data));
			return data;
		} catch (error) {
			dispatch(slice.actions.getServicesError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}

//POST SERVICE
export function addService(userID, token, values) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());

		try {
			const formData = new FormData();

			// Append non-file fields to FormData
			formData.append("name", values.name);
			formData.append("introDescription", values.introDescription);

			// Append non file array fields to FormData
			formData.append("requirements", JSON.stringify(values.requirements));
			formData.append("prices", JSON.stringify(values.prices));
			formData.append("faq", JSON.stringify(values.faq));

			// Append thumbnail file to FormData
			if (values.thumbnail) {
				formData.append("thumbnail", values.thumbnail, values.thumbnail.name);
			}

			// Append content block files and contentBlocks to FormData
			if (Array.isArray(values.contentBlocks)) {
				values.contentBlocks.forEach((detail, index) => {
					formData.append(`contentBlocks[${index}][title]`, detail.title);
					formData.append(`contentBlocks[${index}][details]`, detail.details);

					// Append each image with the field name 'image'
					if (detail.image) {
						formData.append(`image`, detail.image, detail.image.name);
					}
				});
			}

			//Append gallery array to FormData
			if (Array.isArray(values.gallery)) {
				values.gallery.forEach((image) => {
					formData.append(`gallery`, image, image.name);
				});
			}

			//console log formdata
			for (var pair of formData.entries()) {
				console.log("asxaS", pair[0] + ", " + pair[1]);
			}


			const response = await axios.post(
				`http://localhost:8100/api/service/${userID}/post`,
				formData,
				{
					headers: {
						Authorization: token,
					},
				}
			);

			const data = await response.data;
			dispatch(slice.actions.postServiceSuccess(data));
			return response;

		} catch (error) {
			dispatch(slice.actions.postServiceError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}

//EDIT SERVICE
export function editService(userID, values, token, serviceID) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());

		try {
			const formData = new FormData();

			// Append non-file fields to FormData
			formData.append("name", values.name);
			formData.append("introDescription", values.introDescription);

			// Append non file array fields to FormData
			formData.append("requirements", JSON.stringify(values.requirements));
			formData.append("prices", JSON.stringify(values.prices));
			formData.append("faq", JSON.stringify(values.faq));

			// Append thumbnail file to FormData
			if (values.thumbnail) {
				formData.append("thumbnail", values.thumbnail, values.thumbnail.name);
			}

			// Append content block files and contentBlocks to FormData
			if (Array.isArray(values.contentBlocks)) {
				values.contentBlocks.forEach((detail, index) => {
					formData.append(`contentBlocks[${index}][title]`, detail.title);
					formData.append(`contentBlocks[${index}][contentBlocks]`, detail.contentBlocks);

					// Append each image with the field name 'image'
					if (detail.image) {
						formData.append(`image`, detail.image, detail.image.name);
					}
				});
			}

			//Append gallery array to FormData
			if (Array.isArray(values.gallery)) {
				values.gallery.forEach((image, index) => {
					formData.append(`gallery[${index}]`, image, image.name);
				});
			}

			const response = await axios.put(
				`http://localhost:8100/api/service/${userID}/edit/${serviceID}`,
				formData,
				{
					headers: {
						Authorization: token,
					},
				}
			);

			const data = await response.data;
			dispatch(slice.actions.editServiceSuccess(data));
			return data;
		} catch (error) {
			dispatch(slice.actions.editServiceError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}

//DELETE SERVICE
export function deleteService(userID, token, serviceID) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios.delete(
				`http://localhost:8100/api/service/${userID}/delete/single/${serviceID}`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: token,
					},
				}
			);

			const data = await response.data;
			dispatch(slice.actions.deleteServiceSuccess(data));
			return data;
		} catch (error) {
			dispatch(slice.actions.deleteServiceError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}

//DELETE MANY SERVICES
export function deleteManyServices(userID, token, serviceID) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());

		try {
			const response = await axios.delete(
				`http://localhost:8100/api/service/${userID}/delete/many/${serviceID}`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: token,
					},
				}
			);

			const data = await response.data;
			dispatch(slice.actions.deleteManyServicesSuccess(response));
			return data;
		} catch (error) {
			dispatch(slice.actions.deleteManyServicesError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}

//----------------------------end of services--------------------------------------------

//----------------------------details--------------------------------------------

//POST DETAIL
export function postDetail(userID, values, token, serviceID) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios.put(
				`http://localhost:8100/api/service/${userID}/${serviceID}/details/add`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: token,
					},
				}
			);
			const data = await response.data;

			dispatch(slice.actions.postDetailSuccess(data));
		} catch (error) {
			dispatch(slice.actions.postDetailError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}

//EDIT DETAIL
export function editDetail(userID, values, token, serviceID, detailID) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios.put(
				`http://localhost:8100/api/service/${userID}/${serviceID}/details/edit/${detailID}`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: token,
					},
				}
			);
			const data = await response.data;

			dispatch(slice.actions.editDetailSuccess(data));
		} catch (error) {
			dispatch(slice.actions.editDetailError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}

//DELETE DETAIL
export function deleteDetail(userID, token, serviceID, detailID) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios.delete(
				`http://localhost:8100/api/service/${userID}/${serviceID}/details/delete/single/${detailID}`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: token,
					},
				}
			);
			const data = await response.data;

			dispatch(slice.actions.deleteDetailSuccess(data));
		} catch (error) {
			dispatch(slice.actions.deleteDetailError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}

//DELETE MANY DETAILS
export function deleteManyDetails(userID, token, serviceID, detailID) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());

		try {
			const response = await axios.delete(
				`http://localhost:8100/api/service/${userID}/${serviceID}/details/delete/many/${detailID}`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: token,
					},
				}
			);

			const data = await response.data;
			dispatch(slice.actions.deleteManyDetailsSuccess(response));
			return data;
		} catch (error) {
			dispatch(slice.actions.deleteManyDetailsError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}

//----------------------------end of details--------------------------------------------

//----------------------------prices--------------------------------------------

//POST PRICE
export function postPrice(userID, values, token, serviceID) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios.put(
				`http://localhost:8100/api/service/${userID}/${serviceID}/price/add`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: token,
					},
				}
			);
			const data = await response.data;

			dispatch(slice.actions.postPriceSuccess(data));
		} catch (error) {
			dispatch(slice.actions.postPriceError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}

//EDIT PRICE
export function editPrice(userID, values, token, serviceID, priceID) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());

		try {
			const response = await axios.put(
				`http://localhost:8100/api/service/${userID}/${serviceID}/price/edit/${priceID}`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: token,
					},
				}
			);
			const data = await response.data;

			dispatch(slice.actions.editPriceSuccess(data));
		} catch (error) {
			dispatch(slice.actions.editPriceError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}

//DELETE PRICE
export function deletePrice(userID, values, token, serviceID, priceID) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios.delete(
				`http://localhost:8100/api/service/${userID}/${serviceID}/price/delete/single/${priceID}`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: token,
					},
				}
			);
			const data = await response.data;

			dispatch(slice.actions.deletePriceSuccess(data));
		} catch (error) {
			dispatch(slice.actions.deletePriceError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}

//DELETE MANY PRICES
export function deleteManyPrices(userID, values, token, serviceID, priceID) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());

		try {
			const response = await axios.delete(
				`http://localhost:8100/api/service/${userID}/${serviceID}/price/delete/many/${priceID}`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: token,
					},
				}
			);

			const data = await response.data;
			dispatch(slice.actions.deleteManyPricesSuccess(response));
			return data;
		} catch (error) {
			dispatch(slice.actions.deleteManyPricesError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}

//----------------------------end of prices--------------------------------------------

//----------------------------faq--------------------------------------------
//POST FAQ
export function postFaq(userID, values, token, serviceID) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios.put(
				`http://localhost:8100/api/service/${userID}/${serviceID}/faq/add`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: token,
					},
				}
			);
			const data = await response.data;

			dispatch(slice.actions.postFaqSuccess(data));
		} catch (error) {
			dispatch(slice.actions.postFaqError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}

//EDIT FAQ
export function editFaq(userID, values, token, serviceID, faqID) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios.put(
				`http://localhost:8100/api/service/${userID}/${serviceID}/faq/edit/${faqID}`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: token,
					},
				}
			);
			const data = await response.data;

			dispatch(slice.actions.editFaqSuccess(data));
		} catch (error) {
			dispatch(slice.actions.editFaqError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}

//DELETE FAQ
export function deleteFaq(userID, values, token, serviceID, faqID) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios.delete(
				`http://localhost:8100/api/service/${userID}/${serviceID}/faq/delete/single/${faqID}`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: token,
					},
				}
			);
			const data = await response.data;

			dispatch(slice.actions.deleteFaqSuccess(data));
		} catch (error) {
			dispatch(slice.actions.deleteFaqError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}

//DELETE MANY FAQS
export function deleteManyFaqs(userID, values, token, serviceID, faqID) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());

		try {
			const response = await axios.delete(
				`http://localhost:8100/api/service/${userID}/${serviceID}/faq/delete/many/${faqID}`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: token,
					},
				}
			);

			const data = await response.data;
			dispatch(slice.actions.deleteManyFaqsSuccess(response));
			return data;
		} catch (error) {
			dispatch(slice.actions.deleteManyFaqsError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}

//----------------------------end of faq--------------------------------------------

//----------------------------requirements--------------------------------------------

//POST REQUIREMENTS
export function postRequirements(userID, values, token, serviceID) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios.put(
				`http://localhost:8100/api/service/${userID}/${serviceID}/requirements/add`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: token,
					},
				}
			);
			const data = await response.data;

			dispatch(slice.actions.postRequirementsSuccess(data));
		} catch (error) {
			dispatch(slice.actions.postRequirementsError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}

//EDIT REQUIREMENTS
export function editRequirements(
	userID,
	values,
	token,
	serviceID,
	requirementsID
) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios.put(
				`http://localhost:8100/api/service/${userID}/${serviceID}/requirements/edit/${requirementsID}`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: token,
					},
				}
			);
			const data = await response.data;

			dispatch(slice.actions.editRequirementsSuccess(data));
		} catch (error) {
			dispatch(slice.actions.editRequirementsError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}

//DELETE REQUIREMENTS
export function deleteRequirements(
	userID,
	values,
	token,
	serviceID,
	requirementsID
) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios.delete(
				`http://localhost:8100/api/service/${userID}/${serviceID}/requirements/delete/single/${requirementsID}`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: token,
					},
				}
			);
			const data = await response.data;

			dispatch(slice.actions.deleteRequirementsSuccess(data));
		} catch (error) {
			dispatch(slice.actions.deleteRequirementsError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}

//DELETE MANY REQUIREMENTS
export function deleteManyRequirements(
	userID,
	values,
	token,
	serviceID,
	requirementsID
) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());

		try {
			const response = await axios.delete(
				`http://localhost:8100/api/service/${userID}/${serviceID}/requirements/delete/many/${requirementsID}`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: token,
					},
				}
			);

			const data = await response.data;
			dispatch(slice.actions.deleteManyRequirementsSuccess(response));
			return data;
		} catch (error) {
			dispatch(slice.actions.deleteManyRequirementsError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}
