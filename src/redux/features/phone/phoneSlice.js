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
    deleteNumber: (phoneState) => ({
      ...phoneState,
      numbers: [...phoneState.numbers.slice(0, -1)],
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
  deleteNumber: deleteNumberActionCreator,
} = phoneSlice.actions;

export default phoneSlice.reducer;
