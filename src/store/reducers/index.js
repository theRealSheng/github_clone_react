import { combineReducers } from "redux";
import RepoReducer from './reducer_repo';
import SelectedRepoReducer from './reducer_selectedRepo';

const rootReducer = combineReducers({
  repos: RepoReducer,
  selectedRepo: SelectedRepoReducer
});

export default rootReducer;
