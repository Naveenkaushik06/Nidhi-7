import { createSlice } from "@reduxjs/toolkit";

const getAllAgentEmailSlice = createSlice({
  name: "getallagentemail",
  initialState: {
    listOfAgentDetails: [],
  },
  reducers: {
    getAgentInfo: (state, action) => {
      state.listOfAgentDetails.push(action.payload);
    },
  },
});

export const { getAgentInfo } = getAllAgentEmailSlice.actions;

export default getAllAgentEmailSlice.reducer;