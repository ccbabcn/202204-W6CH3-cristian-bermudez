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
      numbers: phoneState.numbers.slice(0, -1),
    }),
    onCallStatus: (phoneState, action) => ({
      ...phoneState,
      onCall: action.payload,
    }),
  },
});

export const {
  addNumber: addNumberActionCreator,
  onCallStatus: callStatusToggleActionCreator,
  deleteNumber: deleteNumberActionCreator,
} = phoneSlice.actions;

export default phoneSlice.reducer;
