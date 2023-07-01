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
      localStorage.setItem('token', response.data.token);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.user);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem('token');
    try {
      await axios.post(`${API_ENDPOINT}/users/logout`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem('token');
    } catch (error) {
      return rejectWithValue(error.response.data.user);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem('token');
    if (!token) {
      return rejectWithValue(null);
    }
    try {
      const response = await axios.get(`${API_ENDPOINT}/users/current`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(null);
    }
  }
);
