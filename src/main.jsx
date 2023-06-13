import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import catsReducer from "./catState.js";
import catsSaga from "./catsSagas.js";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cats: catsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(catsSaga);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
