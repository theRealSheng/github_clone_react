import githubApi from '../apis/github';
import {
  FETCH_USER,
  FETCH_REPO,
  CLEAR_SELECTED,
  THROW_ERROR,
  CLEAR_ERROR
} from './types';

// Feature - Async functions: Allows a more clean code than chain promises
export const fetchUser = () => async (dispatch) => {
  try {
    const response = await githubApi.get(`users/therealSheng/repos`);
    dispatch({ type: FETCH_USER, payload: response.data });
    dispatch({ type: CLEAR_ERROR, payload: null })
  } catch (err) {
    dispatch({ type: THROW_ERROR, payload: err });
  }
};

export const fetchRepo = (repoName) => async (dispatch) => {
  try {
    const response = await githubApi.get(`repos/therealSheng/${repoName}/commits`);
    dispatch({ type: FETCH_REPO, payload: response.data });
    dispatch({ type: CLEAR_ERROR, payload: null })
  } catch (err) {
    dispatch({ type: THROW_ERROR, payload: err });
  }
};

export const clearSelectedRepo = () => {
  return {
    type: CLEAR_SELECTED,
    payload: null
  }
}