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
    callStatusToggle: (phoneState) => ({
      ...phoneState,
      onCall: !phoneState.onCall,
    }),
  },
});

export const {
  addNumber: addNumberActionCreator,
  callStatusToggle: callStatusToggleActionCreator,
} = phoneSlice.actions;

export default phoneSlice.reducer;
