import * as types from '../action-type';

const INITIAL_STATE = {
  user: {},
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  const {type} = action;
  switch (type) {
    case types.FETCH_USER_PROFILE_START:
      return {...INITIAL_STATE, loading: true};
    case types.FETCH_USER_PROFILE_SUCCESS:
      return {
        user: action.user,
        loading: false,
        error: null,
      };
    case types.FETCH_USER_PROFILE_FAILED:
      return {...INITIAL_STATE, error: action.error};

    case types.ON_LOGOUT:
      return {...INITIAL_STATE};
    default:
      return state;
  }
};
