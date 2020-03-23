const initState =  {
    projects: [
        {id: '1', title: 'Modify PM Application', content: 'lorem ipsum'},
        {id: '2', title: 'Fix Serial Key Generator Application', content: 'lorem ipsum'},
        {id: '3', title: 'Implement changes to web Application', content: 'lorem ipsum'},
    ]
}

const projectReducer = (state = initState, action) => {
    // an if statement can be implemented to call upon the  CREATE_PROJECT but in this case we can use a switch/case statement
    switch (action.type) {
        case 'CREATE_PROJECT':
        console.log('created project', action.project)
    }
    return state
}

export default projectReducer;