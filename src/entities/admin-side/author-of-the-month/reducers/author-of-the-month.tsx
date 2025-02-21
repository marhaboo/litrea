import { createSlice } from "@reduxjs/toolkit";
import { getAuthors } from "../api/api";
import { authorsType, MyState } from "../models/types";

const initialState: MyState  = {
  authors: [] as authorsType[]
}
export const authorOfTheMonthSlice = createSlice({
  name: "authorOfTheMonth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getAuthors.fulfilled, (state,action) => {
      state.authors = action.payload
    })
  }
})


export default authorOfTheMonthSlice.reducer