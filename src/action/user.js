import * as types from '../action-type';
// import api, {urls} from '../api';

export const fetchUserProfile = (params) => async (dispatch) => {
  try {
    // const response = await api.post(urls.login, params);
    console.log(params);
    const {error, message, data} = response.data;
    if (!data || error) {
      return Promise.reject(message || 'Something went wrong');
    }
    dispatch({type: types.STORE_USER_PROFILE, payload: {user: data}});
    return Promise.resolve(data);
  } catch (e) {
    return Promise.reject(e);
  }
};
