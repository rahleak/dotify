export const initialState = {
  user: null, 
  playlists: [],
  playing: false,
  item: null,
  //REMOVE AFTER DEVLOPMENT
  token: "BQCMFzDptrx-yYM8w2j_1kFrGPC2zVC1a7fkDLS2q5sD045LX913ik2ovSjsQ8gy6IEDpt8WbrTFZ--Qeo4QCUl59Y34ISbZUO3dhrU_cLphyqzkt-gh7EPgVhzIf9PXClTr_TR7A5-XyBU1oiUIeJGkYnBnyglFTuY9122JYSk3E19OU7nU"
};

//reducers main job is to listen to actions
const reducer = (state, action) => {
  console.log(action);

  // we're pushing a user into the data layeer
  switch(action.type) { //action has 2 things: a type (SET_USER), [payload] (user)
    case 'SET_USER':
      return { //this is what the new state will look like
        ...state, //keep whatever is in the current state
        user: action.user //update the user slice with whatever the action.user was 
      }

    case 'SET_TOKEN':
    return {
    ...state,
    token: action.token
    }
    default: // if nothing happens. action dispatched that has nothing to do with it.
      return state; // where nothing changes
  }
}

export default reducer;