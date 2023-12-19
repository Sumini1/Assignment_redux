import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducer/counterSlice";
import todosReducer from "../reducer/todoSlice";
import todosByIdReducer from "../reducer/todoDynamicSlice";
import registerReducer from "../reducer/registerSlice";
import loginReducer from "../reducer/loginSlice"
import usersReducer from '../reducer/listUserSlice'

// custum middleware to save the token
const saveTokenMiddleware = () =>
  (next) => (action) => {
    // cek mana action type yg mau
    if (action.type === "register/registerUser/fulfilled") {
      const response = action.payload;
      const token = response?.token;
      // save to token
      console.log("Middleware Response", response);
      console.log("Middleware Token", token);
      // save token to localStorage
      localStorage.setItem("token", token);
    }
    next(action);
  };

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    todosById: todosByIdReducer,
    register: registerReducer,
    login: loginReducer,
    users : usersReducer,
  },
  // middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(saveTokenMiddleware),
});
