import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const API_ENDPOINT = 'https://connections-api.herokuapp.com/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(API_ENDPOINT, {
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

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue, getState }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(API_ENDPOINT, contact, {
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

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue, getState }) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${API_ENDPOINT}/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return contactId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
