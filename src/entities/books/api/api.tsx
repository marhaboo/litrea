import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../../shared/utils/axiosRequest";

export const getBooks = createAsyncThunk("getBooks", async () => {
  const {data} = await axiosRequest.get("/books")
  return data
})