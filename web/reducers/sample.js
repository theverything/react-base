import _ from 'lodash';
import { MESSAGE } from '../constants/sample';
import { handleActions } from 'redux-actions';

const initialState = {
  message: ''
};

export default handleActions(
  {
    [MESSAGE]: (state, { payload }) => {
      return _.assign({}, state, {
        message: payload
      });
    }
  },
  initialState
);
