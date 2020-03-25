import { configureStore, combineReducers, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import uiReducer from 'state/slices/ui';

const rootReducer = combineReducers({
  ui: uiReducer
});

const store = configureStore({
  reducer: rootReducer
});

export type TRootState = ReturnType<typeof rootReducer>;
export type TDispatch = typeof store.dispatch;
export type TThunk = ThunkAction<void, TRootState, null, Action<string>>;

export default store;
