/* eslint-disable import/no-anonymous-default-export */
import { ActionTypes } from 'utilities/constants';

import actionCreatorFactory from 'typescript-fsa';

const ac = actionCreatorFactory();

interface LoginParam {
  id: string;
}

interface LoginResult {
  data: any;
}

interface LoginError {
  error: string;
}

export default {
  login: ac.async<LoginParam, LoginResult, LoginError>(ActionTypes.USER_LOGIN),
  logout: ac.async<undefined, undefined>(ActionTypes.USER_LOGOUT),
};
