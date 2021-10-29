const initState = {
  projects: []
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREAET_PROJECT' :
      console.log('created project', action.project)
      return state;
    case 'CREAET_PROJECT_ERROR':
      console.log(action.e)
      return state;
    case 'INITIAL_PROJECT':
      console.log(action.data)
      return {...state, projects: action.data}
    default : 
      console.log('nothing')
  }
      return state;
};

export default projectReducer;