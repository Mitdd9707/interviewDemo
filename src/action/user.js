import * as types from '../action-type';
import api, {urls, setAuthToken} from '../api';

export const storeUserProfile = (params) => async (dispatch) => {
  try {
    const response = await api.post(urls.login, params);
    const {error, token} = response.data;
    if (!token || error) {
      return {error: error || 'Something went wrong'};
    }
    setAuthToken(token);
    dispatch({
      type: types.STORE_USER_PROFILE,
      payload: {user: {token, ...params}},
    });
    return {user: {token, ...params}};
  } catch (e) {
    return {error: e.message};
  }
};
export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: types.ON_LOGOUT,
    });
    return true;
  } catch (e) {
    return {error: e.message};
  }
};
