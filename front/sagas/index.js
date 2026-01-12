import axios from "axios";
import { all, call, fork, put, takeLatest, delay } from "redux-saga/effects";
import { backUrl } from "../config/config";

axios.defaults.baseURL = `${backUrl}/api/`;
axios.defaults.withCredentials = true;

import postSaga from "./post";
import userSaga from "./user";

export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga)]);
}
