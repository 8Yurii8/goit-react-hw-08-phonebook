// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// // Адреса API
// const API_ENDPOINT = 'https://connections-api.herokuapp.com';

// // Створення користувача
// const getToken = () => {
//   const token = localStorage.getItem('token');
//   return token;
// };
// export const createUser = createAsyncThunk(
//   'auth/createUser',
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

// // Вхід користувача
// export const loginUser = createAsyncThunk(
//   'auth/loginUser',
//   async (userData, thunkAPI) => {
//     try {
//       const response = await axios.post(
//         `${API_ENDPOINT}/users/login`,
//         userData
//       );
//       // Повертаємо дані користувача та отриманий токен авторизації
//       return response.data;
//     } catch (error) {
//       // Обробка помилки
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// // Адреса API
// const API_ENDPOINT = 'https://connections-api.herokuapp.com';

// // Функція для отримання токену з localStorage
// const getToken = () => {
//   const token = localStorage.getItem('token');
//   return token;
// };

// // Створення користувача
// export const createUser = createAsyncThunk(
//   'auth/createUser',
//   async (userData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         `${API_ENDPOINT}/users/signup`,
//         userData
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// // Вхід користувача
// export const loginUser = createAsyncThunk(
//   'auth/loginUser',
//   async (userData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         `${API_ENDPOINT}/users/login`,
//         userData
//       );
//       const token = response.data.token;
//       console.log(token);
//       localStorage.setItem('token', token);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_ENDPOINT = 'https://connections-api.herokuapp.com';

// Створення користувача
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
      return rejectWithValue(error.response.data);
    }
  }
);

// Вхід користувача
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_ENDPOINT}/users/login`,
        userData
      );
      const token = response.data.token;
      localStorage.setItem('token', token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
