import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";

let  reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    friends: friendsReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;