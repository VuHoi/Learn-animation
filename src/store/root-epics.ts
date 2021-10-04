import { combineEpics } from 'redux-observable';
import { userLogin } from 'pages/login/epics';

export default combineEpics(userLogin);
