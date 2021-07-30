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
      return [...state, action.payload];
    },
    doneTask(state, { payload: { id } }) {
      return state.map((el) => (el.id === id ? { ...el, done: !el.done } : el));
    },
    deleteTask(state, { payload: { id } }) {
      return state.map((el) =>
        el.id === id ? { ...el, deleted: !el.deleted } : el
      );
    },
  },
});

export const { addTask, doneTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
