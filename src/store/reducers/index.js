import { combineReducers } from "redux";
import RepoReducer from './reducer_repo';
import SelectedRepoReducer from './reducer_selectedRepo';
import ErrorReducer from './reducer_error';

const rootReducer = combineReducers({
  repos: RepoReducer,
  selectedRepo: SelectedRepoReducer,
  error: ErrorReducer
});

export default rootReducer;
