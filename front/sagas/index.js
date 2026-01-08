import axios from "axios";
import { all, call, fork, put, takeLatest, delay } from "redux-saga/effects";

axios.defaults.baseURL = "http://localhost:3065";
axios.defaults.withCredentials = true;

import postSaga from "./post";
import userSaga from "./user";

export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga)]);
}
