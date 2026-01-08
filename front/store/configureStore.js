import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../sagas";
import { createWrapper } from "next-redux-wrapper";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer =
    process.env.NODE_ENV === "production"
      ? applyMiddleware(sagaMiddleware)
      : compose(applyMiddleware(sagaMiddleware));

  const store = createStore(rootReducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureStore);
export default wrapper;

// import { createWrapper } from "next-redux-wrapper";
// import { applyMiddleware, createStore, compose } from "redux";
// import createSagaMiddleware from "redux-saga";
// import reducer from "../reducers";

// const loggerMiddleware =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     console.log(action);
//     return next(action);
//   };

// const configureStore = () => {
//   const sagaMiddleware = createSagaMiddleware();
//   const middlewares = [sagaMiddleware, loggerMiddleware];

//   let enhancer;

//   if (process.env.NODE_ENV === "production") {
//     enhancer = compose(applyMiddleware(...middlewares));
//   } else {
//     // ⭐ SSR에서는 DevTools 연결 금지
//     const devtools =
//       typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__
//         ? window.__REDUX_DEVTOOLS_EXTENSION__()
//         : (f) => f; // SSR에서는 그냥 패스하는 함수 사용

//     enhancer = compose(applyMiddleware(...middlewares), devtools);
//   }

//   const store = createStore(reducer, enhancer);

//   // saga 실행
//   // store.sagaTask = sagaMiddleware.run(rootSaga);

//   return store;
// };

// export const wrapper = createWrapper(configureStore, {
//   debug: process.env.NODE_ENV === "development",
// });

// export default wrapper;
