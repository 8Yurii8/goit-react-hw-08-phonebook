// import { createSlice } from '@reduxjs/toolkit';
// import { createUser, loginUser, logoutUser, refreshUser } from './auth';

// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     currentUser: null,
//     isLoading: false,
//     error: null,
//     isAuthenticated: false,
//   },
//   reducers: {
//     setCurrentUser(state, action) {
//       state.currentUser = action.payload;
//       state.token = action.payload.token;
//     },
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(createUser.pending, state => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(createUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.currentUser = action.payload;
//         state.token = action.payload.token;
//       })
//       .addCase(createUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addCase(loginUser.pending, state => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.currentUser = action.payload;
//         state.token = action.payload.token;
//         state.isAuthenticated = true;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addCase(logoutUser.pending, state => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(logoutUser.fulfilled, state => {
//         state.isLoading = false;
//         state.currentUser = null;
//         state.token = null;
//         state.isAuthenticated = false;
//       })
//       .addCase(logoutUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addCase(refreshUser.pending, state => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(refreshUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.token = action.payload.token;
//       })
//       .addCase(refreshUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { setCurrentUser } = userSlice.actions;
// export const userReducer = userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { createUser, loginUser, logoutUser, refreshUser } from './auth';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isLoading: false,
    error: null,
    isAuthenticated: localStorage.getItem('token') !== null,
    token: localStorage.getItem('token'),
  },
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
      state.token = action.payload.token;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(createUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
        state.token = action.payload.token;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.isLoading = false;
        state.currentUser = null;
        state.token = null;
        localStorage.removeItem('token');
        state.isAuthenticated = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(refreshUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setCurrentUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
