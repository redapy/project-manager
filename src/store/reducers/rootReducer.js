import { combineReducers } from "redux";
import authReducer from './authReducer'
import notificationReducer from "./notificationReducer";
import projectReducer from './projectReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    notification: notificationReducer
})

export default rootReducer