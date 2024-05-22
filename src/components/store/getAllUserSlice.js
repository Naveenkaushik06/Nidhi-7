import { createSlice } from "@reduxjs/toolkit";

const getAllUserSlice = createSlice({
  name: "getalluser",
  initialState: {
    listOfAllUsers: [],
  },
  reducers: {
    getAllUser: (state, action) => {
      state.listOfAllUsers.push(action.payload);
    },
  },
});

export const { getAllUser } = getAllUserSlice.actions;

export default getAllUserSlice.reducer;