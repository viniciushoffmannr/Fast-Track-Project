import { call, put, all, takeLatest } from "redux-saga/effects";
import api from "../../../services/api";
import { selectCharacterSuccess } from "./actions";

function* addToCharacter({ id }) {
  const response = yield call(api.get, `character/${id}`);

  yield put(selectCharacterSuccess(response.data));
  console.log(response.data);
}

export default all([takeLatest("SELECT_CHARACTER_REQUEST", addToCharacter)]);
