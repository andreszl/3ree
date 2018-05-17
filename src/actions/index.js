import * as types from '../constants/ActionTypes';

export function setUserId(userId) {
    const action = {
      type: types.SET_USER_ID,
      userId
    }
    console.log('action in setUserId', action)
    return action
  }