/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, POST_SMURF_START, POST_SMURF_SUCCESS, POST_SMURF_FAILURE   } from '../actions';

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
      case FETCH_SMURFS_START:
      // console.log(state, action)
      return {
          ...state,
          fetchingSmurfs: true,
          error: null,
      }
      case FETCH_SMURFS_SUCCESS:
      // console.log(state, action)
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      }
      case FETCH_SMURFS_FAILURE:
      // console.log(state, action)
      return {
        ...state,
        error: action.payload
      }
      case POST_SMURF_START:
            // console.log(state, action)
      return {
        ...state,
        addingSmurf: true,
        error: ''
      }
      case POST_SMURF_SUCCESS: 
            // console.log(state, action)
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload
      }
      case POST_SMURF_FAILURE:
            // console.log(state, action)
      return {
        ...state, 
        addingSmurf: false,
        error: action.payload
      }

      default: 
      return state
    }
  }



