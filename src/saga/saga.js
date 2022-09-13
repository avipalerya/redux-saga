import * as api from "../api/userApi";
import { call, fork, put, takeEvery } from "redux-saga/effects";
import * as actions from "../actions/userActionTypes";
function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    yield put(actions.getUserSuccess(result.data.data));
  } catch (err) {
    console.log(err);
  }
}
function* watchGetUsersrequest() {
  yield takeEvery(actions.Types.GET_USER_REQUEST, getUsers);
}
const userSaga = [fork(watchGetUsersrequest)];
export default userSaga;
