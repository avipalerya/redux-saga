import { delay, put, takeLatest } from "redux-saga/effects";
import { AGE_UP_ASYNC } from "../constants/actionTypes";

function* ageUpAsync() {
  yield delay(4000);
  yield put({ type: AGE_UP_ASYNC, value: 1 });
}
export function* watchAgeUp() {
  yield takeLatest("AGE-UP", ageUpAsync);
}
