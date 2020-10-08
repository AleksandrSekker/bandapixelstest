import { createSlice } from '@reduxjs/toolkit';
import {RootState } from '../app/store';

interface InputState {
  todos: [];
}

const initialState: InputState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    settodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { settodos } = todoSlice.actions;

export const selectTodo = (state: RootState) => state.todo.todos;

export default todoSlice.reducer;
