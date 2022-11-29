import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todosList: [],
};

const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask(state, action) {
      state.todosList.push(action.payload);
    },
  },
});

export const { addTask } = slice.actions;
export default slice.reducer;
