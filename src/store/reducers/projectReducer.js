const initState = {
  projects: [
    {id: '1', title: 'help me find peach', content: 'blah blah blah'},
    {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
    {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREAET_PROJECT' :
      console.log('created project', action.project)
      return state;
    case 'CREAET_PROJECT_ERROR':
      console.log(action.e)
      return state;
    default : 
      console.log('nothing')
  }
      return state;
};

export default projectReducer;