import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    // authReducer will update any data on the auth property
    auth: authReducer,
    // projectReducer will update any data on the project property inside the state project
    project: projectReducer
});

export default rootReducer;
