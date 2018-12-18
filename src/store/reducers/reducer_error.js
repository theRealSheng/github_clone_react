import { THROW_ERROR, CLEAR_ERROR } from '../actions/types';

export default function(state = null, action) {
  switch(action.type) {
    case THROW_ERROR:
      return action.payload;
    case CLEAR_ERROR:
      return action.payload;
    default:
      return state
  }
}