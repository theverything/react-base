import { createAction } from 'redux-actions';

import { MESSAGE } from '../constants/sample';

export const createMessage = createAction(MESSAGE);
