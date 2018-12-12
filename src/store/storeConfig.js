import { createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

import rootReducer from "./reducers";


const configStore = preloadeState => {
  
  const middlewire = [thunk];
  const middlewireEnhancer = applyMiddleware(...middlewire);
  const storeEnhancer = [middlewireEnhancer];
  const composedEnhancer = composeWithDevTools(...storeEnhancer);

  const store = createStore(rootReducer, preloadeState, composedEnhancer);

  return store;
};
export default configStore;