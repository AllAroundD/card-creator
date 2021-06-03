import api from '../utils/API'
// import { setAlert } from './alert'

import { ADD_USER, UPDATE_PROFILE_PICTURE, UPDATE_USER, FORM_SUBMITION_STATUS, LOGIN } from './types';

export const ProfileActions = {

  addProfile: (user) => ({ type: ADD_USER, payload: { user } }),

  updateProfileImage: (image) => ({ type: UPDATE_PROFILE_PICTURE, payload: { image } }),

  updateProfile: (user) => ({ type: UPDATE_USER, payload: { user } }),

  formSubmittionStatus: (status) => ({ type: FORM_SUBMITION_STATUS, payload: { status }}),

  login: (user) => ({ type: LOGIN, payload: { user } })
}