// This file is meant to add/delete/modify a project

export const createProject = (project) => {
    // dispatch is a function that dispatches an action to the reducer
    return (dispatch, getState) => {
        // Make an asynchronous call to database and pause dispatch
        dispatch({ type: 'CREATE_PROJECT', project: project });
    }
};