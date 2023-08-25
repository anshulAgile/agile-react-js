import { ApiEndPoints } from 'utils/constants';
import { appLoader } from 'utils/functions';
import { IApiSuccess } from 'utils/Types';
import { ISignInReq, ISignInRes } from './types';
import { authSuccess } from 'services/redux/AuthSlice';
import { store } from 'services/redux/store';
import apiInstance from '..';

export const authAPI = {
  // SignIn
  async signIn(data: ISignInReq): Promise<IApiSuccess<ISignInRes>> {
    appLoader(true);
    return apiInstance
      .post(ApiEndPoints.auth.signIn, data)
      .then((response) => {
        store.dispatch(authSuccess(response));
        return response;
      })
      .catch((error) => {
        throw error?.response?.data;
      })
      .finally(() => appLoader(false));
  }
};
