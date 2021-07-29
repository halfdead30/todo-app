import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "First task. Wake up", done: false, deleted: false },
  {
    id: 2,
    title: "Second task. Go to the bath",
    done: false,
    deleted: false,
  },
  {
    id: 3,
    title: "Third task. Make the breakfast",
    done: false,
    deleted: false,
  },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      return [...state, { action }];
    },
    doneTask(state, action) {
      return;
    },
  },
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
