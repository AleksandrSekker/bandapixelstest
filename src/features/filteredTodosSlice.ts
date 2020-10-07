import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface InputState {
  filteredTodos: any;
}

const initialState: InputState = {
  filteredTodos: [],
};

export const filteredTodoSlice = createSlice({
  name: 'filteredtodo',
  initialState,
  reducers: {
    setfilteredTodos: (state, action) => {
      state.filteredTodos = action.payload;
    },
  },
});

export const { setfilteredTodos } = filteredTodoSlice.actions;

export const selectFilteredTodos = (state: RootState) =>
  state.filteredtodo.filteredTodos;

export default filteredTodoSlice.reducer;
