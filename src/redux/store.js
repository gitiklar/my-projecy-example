import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos/slice";

const store = configureStore({
  reducer: {
    todosReducer,
  },
});
window.store = store;
export default store;
