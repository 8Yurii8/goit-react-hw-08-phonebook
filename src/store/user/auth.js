import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_ENDPOINT = 'https://connections-api.herokuapp.com';

export const createUser = createAsyncThunk(
  'auth/createUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_ENDPOINT}/users/signup`,
        userData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.user);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_ENDPOINT}/users/login`,
        userData
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.user);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
    } catch (error) {
      return rejectWithValue(error.response.data.user);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_ENDPOINT}/users/current`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
