import { configureStore } from "@reduxjs/toolkit";
import authadminReducer from "../store/authAdmin";
import getAllUser from "../store/getAllUserSlice"
import getAllAgent from "../store/getAllAgentSlice"

const store = configureStore({
  reducer: {
    authadminReducer: authadminReducer,
    getalluser: getAllUser,
    getallagent: getAllAgent,
  },
});

export default store;
