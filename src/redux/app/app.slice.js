import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
  stack: 'init',
}

const appSlice = createSlice({
  name: 'app',
  initialState: INIT_STATE,
  reducers: {
    setStack: (state, action) => {
      state.stack = action.payload
      async () => await AsyncStorage.setItem('stack', state.stack);
    },

    getStack: (state, action) => {
      async () => await AsyncStorage.getItem('stack')
    }

  }
})

export default appSlice.reducer;
export const { setStack, getStack } = appSlice.actions;