// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const API_ENDPOINT =
//   'https://648eb46875a96b6644442e9e.mockapi.io/contacts/contacts';

// export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
//   const response = await axios.get(`${API_ENDPOINT}`);
//   return response.data;
// });

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async contact => {
//     const response = await axios.post(`${API_ENDPOINT}`, contact);
//     return response.data;
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async contactId => {
//     await axios.delete(`${API_ENDPOINT}/${contactId}`);
//     return contactId;
//   }
// );

// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const API_ENDPOINT =
//   'https://connections-api.herokuapp.com/api/contacts';

// // Функція для отримання токену з localStorage
// const getToken = () => {
//   const token = localStorage.getItem('token');
//   return token;
// };

// export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
//   const token = getToken();
//   const response = await axios.get(API_ENDPOINT, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// });

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, { rejectWithValue }) => {
//     const token = getToken();
//     try {
//       const response = await axios.post(API_ENDPOINT, contact, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId, { rejectWithValue }) => {
//     const token = getToken();
//     try {
//       await axios.delete(`${API_ENDPOINT}/${contactId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       return contactId;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const API_ENDPOINT = 'https://connections-api.herokuapp.com/contacts';

// Функція для отримання токену з localStorage
const getToken = () => {
  const token = localStorage.getItem('token');
  return token;
};

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const token = getToken();
  const response = await axios.get(API_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    const token = getToken();
    try {
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
  async (contactId, { rejectWithValue }) => {
    const token = getToken();
    try {
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
