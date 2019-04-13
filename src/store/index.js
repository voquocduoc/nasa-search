import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const configureStore = function(initialState) {
  const enhancer = compose(
    applyMiddleware(thunk)
  );

  const storeRedux = createStore(rootReducer, enhancer);

  return storeRedux;
};

export default configureStore;