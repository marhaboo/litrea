import { createSlice } from "@reduxjs/toolkit";
import { getBooks } from "../api/api";
import { booksType, MyState } from "../models/types";

const initialState: MyState  = {
  books: [] as booksType[]
}
export const booksSlice = createSlice({
  name: "booksSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getBooks.fulfilled, (state,action) => {
      state.books = action.payload
    })
  }
})


export default booksSlice.reducer