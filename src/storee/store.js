import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./characterSlice";
import createSagaMiddleware from "redux-saga";

import { mySaga } from "./sagas";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export default configureStore({
  reducer: {
    characters: charactersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(mySaga);
