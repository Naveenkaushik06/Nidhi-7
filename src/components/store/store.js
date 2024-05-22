import { configureStore } from "@reduxjs/toolkit";
import authadminReducer from "../store/authAdmin";
import getAllUser from "../store/getAllUserSlice"

const store = configureStore({
  reducer: {
    authadminReducer: authadminReducer,
    getalluser: getAllUser,
  },
});

export default store;
