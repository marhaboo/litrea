import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthResponse, ErrorResponse } from "../models/types"; 
import { axiosRequest } from "../../../shared/utils/axiosRequest";


export const registerUser = createAsyncThunk<AuthResponse, { email: string; password: string; name: string }, { rejectValue: ErrorResponse }>(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosRequest.post(`/register`, userData);
      localStorage.setItem("token", response.data.token); // Store the token in localStorage
      return response.data; // Returns { token, user }
    } catch (error: any) {
      return rejectWithValue({ message: error.response?.data?.message || "Registration failed" });
    }
  }
);

// Async thunk for user login
export const loginUser = createAsyncThunk<AuthResponse, { name: string; password: string }, { rejectValue: ErrorResponse }>(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosRequest.post(`/login`, userData);
      localStorage.setItem("token", response.data.token); // Store the token in localStorage
      return response.data; // Returns { token, user }
    } catch (error: any) {
      return rejectWithValue({ message: error.response?.data?.message || "Login failed" });
    }
  }
);
