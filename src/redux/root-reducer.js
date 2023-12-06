import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

// slices
import userReducer from "./slices/user";
import StorageReducer from "./slices/storage"

import calendarReducer from "./slices/calendar";
import chatReducer from "./slices/chat";
import kanbanReducer from "./slices/kanban";

// ----------------------------------------------------------------------

const config = {
	key: "root",
	storage,
	whitelist: ["user"],
	blacklist: [],
};

export const rootReducer = combineReducers({
	user: userReducer,
	storage: StorageReducer,

	calendar: calendarReducer,
	chat: chatReducer,
	kanban: kanbanReducer,
});

const persistedReducer = persistReducer(config, rootReducer);

export default persistedReducer;
