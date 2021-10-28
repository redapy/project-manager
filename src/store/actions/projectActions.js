

export const createProject = project => {
    return (dispatch, getState) => {
        //asy
        dispatch({type: 'CREAET_PROJECT', project})

    }
}