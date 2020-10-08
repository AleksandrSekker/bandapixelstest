import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface InputState {
  inputText: string;
}

const initialState: InputState = {
  inputText: '',
};

export const inputtextSlice = createSlice({
  name: 'inputtext',
  initialState,
  reducers: {
    setinputText: (state, action) => {
      state.inputText = action.payload;
    },
  },
});

export const { setinputText } = inputtextSlice.actions;

export const selectInputText = (state: RootState) => state.inputtext.inputText;

export default inputtextSlice.reducer;
