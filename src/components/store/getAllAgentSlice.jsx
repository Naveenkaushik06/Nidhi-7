import { createSlice } from "@reduxjs/toolkit";

const getAllAgentSlice = createSlice({
  name: "getallagent",
  initialState: {
    listOfAllAgents: [],
  },
  reducers: {
    getAllAgent: (state, action) => {
      state.listOfAllAgents.push(action.payload);
    },
  },
});

export const { getAllAgent } = getAllAgentSlice.actions;

export default getAllAgentSlice.reducer;