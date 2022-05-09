import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./characterSlice";
import createSagaMiddleware from "redux-saga";
import profileReducer from "./profileSlice";

import { mySaga } from "./sagas";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export default configureStore({
  reducer: {
    characters: charactersReducer,
    user: profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(mySaga);
