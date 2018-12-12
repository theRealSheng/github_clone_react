import githubApi from '../apis/github';
import {
  FETCH_USER,
  FETCH_REPO,
  CLEAR_SELECTED
} from './types';

// Feature - Async functions: Allows a more clean code than chain promises
export const fetchUser = () => async (dispatch) => {   
  const response = await githubApi.get(`users/therealSheng/repos`);
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const fetchRepo = (repoName) => async (dispatch) => {   
  const response = await githubApi.get(`repos/therealSheng/${repoName}/commits`);
  dispatch({ type: FETCH_REPO, payload: response.data });
};

export const clearSelectedRepo = () => {
  return {
    type: CLEAR_SELECTED,
    payload: null
  }
}