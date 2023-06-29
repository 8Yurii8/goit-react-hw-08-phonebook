// import { createSlice } from '@reduxjs/toolkit';
// import { createUser, loginUser } from './auth';

// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     currentUser: null,
//     isLoading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(createUser.pending, state => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(createUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.currentUser = action.payload;
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
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const userReducer = userSlice.reducer;
// export default userSlice.actions;

import { createSlice } from '@reduxjs/toolkit';
import { createUser, loginUser } from './auth';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    logoutUser: state => {
      state.currentUser = null;
      state.isLoading = false;
      state.error = null;
      localStorage.removeItem('token'); // Очищення токену
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
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logoutUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
export default userSlice.actions;
