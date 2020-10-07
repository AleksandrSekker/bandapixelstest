import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface InputState {
  staTus: any;
}

const initialState: InputState = {
  staTus: 'all',
};

export const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.staTus = action.payload;
    },
  },
});

export const { setStatus } = statusSlice.actions;

export const selectStatus = (state: RootState) => state.status.staTus;

export default statusSlice.reducer;
