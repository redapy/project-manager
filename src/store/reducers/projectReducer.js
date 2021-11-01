const initState = {
  projects: []
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREAET_PROJECT' :
      return state;
    case 'CREAET_PROJECT_ERROR':
      return state;
    case 'INITIAL_PROJECT':
      return {...state, projects: action.data}
    default : 
      console.log('nothing')
  }
      return state;
};

export default projectReducer;