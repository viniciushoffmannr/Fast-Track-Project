import { call, put, takeEvery } from "redux-saga/effects";
import api from "../services/api";

import { fetchCharcSuccess, fetchCharcRequest } from "./characterSlice";

function* addToCharacter(action) {
  const response = yield call(api.get, `character/${action.payload}`);

  yield put(fetchCharcSuccess(response.data));
}

export function* mySaga() {
  yield takeEvery(fetchCharcRequest.type, addToCharacter);
}
