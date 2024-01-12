import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
  stack: 'init',
}

const appSlice = createSlice({
  name: 'app',
  initialState: INIT_STATE,
  reducers: {
    setStack: (state, action) => {
      const { stack } = action.payload;
      state.stack = stack
    }
  }
})

export default appSlice.reducer;
export const { setStack } = appSlice.actions;