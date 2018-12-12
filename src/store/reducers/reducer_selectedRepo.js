import { FETCH_REPO, CLEAR_SELECTED } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_REPO:
      return action.payload;
    case CLEAR_SELECTED:
      return action.payload;
    default:
      return state
  }
}