import { call, put, all, takeLatest } from "redux-saga/effects";
import api from "../../../services/api";
import { selectCharacterSuccess } from "./actions";
import history from "../../../services/history";

function* addToCharacter({ id }) {
  const response = yield call(api.get, `character/${id}`);

  yield put(selectCharacterSuccess(response.data));
  history.push("/profile");
}

export default all([takeLatest("SELECT_CHARACTER_REQUEST", addToCharacter)]);
