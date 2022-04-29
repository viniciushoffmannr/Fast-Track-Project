import { all } from "redux-saga/effects";

import addToCharacter from "./nameApi/sagas";

export default function* rootSaga() {
  return yield all([addToCharacter]);
}
