import { all } from "redux-saga/effects";
import userSaga from "./saga";
export default function* rootSaga() {
  yield all([...userSaga]);
}
