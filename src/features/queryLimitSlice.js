import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 30,
  limit:151
};

export const queryLimitSlice = createSlice({
  name: "queryLimit",
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      if (state.value >= state.limit) state.value = state.limit;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementByAmount } = queryLimitSlice.actions;

export default queryLimitSlice.reducer;
