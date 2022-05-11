import { createSlice } from "@reduxjs/toolkit";

const phoneSlice = createSlice({
  name: "phone",
  initialState: {
    numbers: [],
    onCall: false,
  },
  reducers: {
    addNumber: (phoneState, action) => ({
      ...phoneState,
      numbers: [...phoneState.numbers, action.payload],
    }),
  },
});

export const { addNumber: addNumberActionCreator } = phoneSlice.actions;

export default phoneSlice.reducer;
