import { configureStore } from "@reduxjs/toolkit";
import authadminReducer from "../store/authAdmin";
import getAllUser from "../store/getAllUserSlice"
import getAllAgent from "../store/getAllAgentSlice"
import getAllAgentEmail from "../store/getAllAgentEmailSlice"

const store = configureStore({
  reducer: {
    authadminReducer: authadminReducer,
    getalluser: getAllUser,
    getallagent: getAllAgent,
    getallagentemail: getAllAgentEmail,
  },
});

export default store;
