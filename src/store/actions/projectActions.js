// This file is meant to add/delete/modify a project

export const createProject = (project) => {
    // dispatch is a function that dispatches an action to the reducer
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // Make an asynchronous call to Firestore database and pause dispatch
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })
    }
};