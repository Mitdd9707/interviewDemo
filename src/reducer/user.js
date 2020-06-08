import * as types from '../action-type';

const INITIAL_STATE = {
  user: {},
};

export default (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.STORE_USER_PROFILE:
      return {
        user: payload.user,
      };
    case types.ON_LOGOUT:
      return {...INITIAL_STATE};
    default:
      return state;
  }
};
