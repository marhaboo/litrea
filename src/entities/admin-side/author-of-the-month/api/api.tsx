import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../../../shared/utils/axiosRequest";

export const getAuthors = createAsyncThunk("authorOfTheMonth/getAuthors", async () => {
  const {data} = await axiosRequest.get("/authors")
  return data
})

export const updateAuthorOfTheMonth = createAsyncThunk("authorOfTheMonth/updateAuthorOfTheMonth",
  async (authorId:string, {dispatch}) => {
    await axiosRequest.put("/authors", {authorId})
     dispatch(getAuthors())
  }
)