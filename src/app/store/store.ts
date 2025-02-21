import { configureStore } from "@reduxjs/toolkit";
import authorOfTheMonthReducer from "../../entities/admin-side/author-of-the-month/reducers/author-of-the-month";
import booksReducer from "../../entities/books/reducers/booksSlice";
import authReducer from "../../entities/auth/reducers/authSlice";
export const store = configureStore({
  reducer: {
    authorMonth: authorOfTheMonthReducer,
    books: booksReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
