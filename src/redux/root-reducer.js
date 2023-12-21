import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

// slices
import UserReducer from "./slices/user";
import StorageReducer from "./slices/storage";
import ReservationsReducer from "./slices/reservations";
import ServicesReducer from "./slices/services";
import BlogReducer from "./slices/blogs";

import calendarReducer from "./slices/calendar";
import chatReducer from "./slices/chat";
import kanbanReducer from "./slices/kanban";

// ----------------------------------------------------------------------

const config = {
	key: "root",
	storage,
	whitelist: ["user", "storage", "reservation", "blogs"],
	blacklist: [],
};

export const rootReducer = combineReducers({
	user: UserReducer,
	
	storage: StorageReducer,
	reservations: ReservationsReducer,
	services: ServicesReducer,
	blog: BlogReducer,

	calendar: calendarReducer,
	chat: chatReducer,
	kanban: kanbanReducer,
});

const persistedReducer = persistReducer(config, rootReducer);

export default persistedReducer;
