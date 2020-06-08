import * as types from '../action-type';
import Api, {urls} from '../api';

export const fetchUserProfile = (params) => {
  return {
    type: types.FETCH_USER_PROFILE_START,
    params,
  };
};
export const fetchProfile = async (params) => {
  const response = await Api.get(urls.profile, params);
  return response;
};
