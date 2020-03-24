import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
// This is a pre-made reducer that synchronizes our firestore data with our state in the background. It understands and is able to read the firebase data, because of the file: fbConfig.js
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    // authReducer will update any data on the auth property
    auth: authReducer,
    // projectReducer will update any data on the project property inside the state project
    project: projectReducer,
    firestore: firestoreReducer,
    // This firebaseReducer will synchronize with our off status on firebase with our redux app in the state and display it on this firebase object on this state.
    firebase: firebaseReducer
});

export default rootReducer;
