import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import inputtextReducer from '../features/inputSlice';
import todoReducer from '../features/todoSlice';
import statusReducer from '../features/statusSlice';
import filteredtodoReducer from '../features/filteredTodosSlice';
export const store = configureStore({
  reducer: {
    inputtext: inputtextReducer,
    todo: todoReducer,
    status: statusReducer,
    filteredtodo: filteredtodoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
