import { 
    LOGIN,
    ADD_USER,
    UPDATE_USER,
    UPDATE_PROFILE_PICTURE,
    FORM_SUBMITION_STATUS
 } from '../actions/types';

const initialState = {
  profile: {
    username: '',
    // lastName: '',
    // telephone: '',
    // age: 28,
    // email: '',
    // state: '',
    // country: '',
    // address: 'Home',
    // address1: '',
    // address2: '',
    // interests: [],
    // profileImage: '',
    // subscribenewsletter: false
  },
  formSubmitted: false
}

const profileReducer = (state = initialState, action) => {
  const {type, payload} = action
  switch (type) {
    case LOGIN:
    console.log('login', action.payload.user)
      return {
        ...state,
        profile: payload.user,
        formSubmitted: false // after update user formsubmition reset
      }
    case ADD_USER:
      return {
        ...state,
        profile: payload.user,
        formSubmitted: false // after update user formsubmition reset
      }
    case UPDATE_USER:
      return {
        ...state,
        profile: payload.user,
        formSubmitted: false // after update user formsubmition reset
      }
    // case UPDATE_PROFILE_PICTURE:
    //   return {
    //     ...state,
    //     profile: {
    //       ...state.profile,
    //       profileImage: payload.image
    //     }
    //   }
    case FORM_SUBMITION_STATUS:
      return {
        ...state,
        formSubmitted: payload.status
      }
    default:
      return state;
  }
}

export default profileReducer;