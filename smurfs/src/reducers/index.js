/*
  Be sure to import in all of the action types from `../actions`
*/
import { LOGIN_START, LOGIN_SUCCESS } from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null,
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default function smurfReducer(state = initialState, action){
  switch(action.type){
      case LOGIN_START:
      return {
          ...state,
          loggingIn: true,
      }
      case LOGIN_SUCCESS:
      return {
          ...state, 
          loggingIn: false,
      }
      case LOGIN_FAILURE:
      return{
          ...state,
          loggingIn: false,
          error: action.payload,
      }
      default: 
      return state
    }
  }



