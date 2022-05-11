import { configureStore } from "@reduxjs/toolkit";
import phoneReducer from "../features/phone/phoneSlice";

const store = configureStore({ reducer: { phone: phoneReducer } });

export default store;
