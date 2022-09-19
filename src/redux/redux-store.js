import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";

let  reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    friends: friendsReducer
});

let store = createStore(reducers);

export default store;