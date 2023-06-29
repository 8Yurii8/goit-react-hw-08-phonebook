// import { createSlice } from '@reduxjs/toolkit';

// import { fetchContacts, addContact, deleteContact } from './operations';

// const phonebookSlice = createSlice({
//   name: 'phonebook',
//   initialState: {
//     contacts: {
//       items: [],
//       isLoading: false,
//       error: null,
//     },
//     filter: '',
//   },
//   reducers: {
//     filterChangeAction: (state, { payload }) => {
//       state.filter = payload;
//     },
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(fetchContacts.pending, state => {
//         state.contacts.isLoading = true;
//         state.contacts.error = null;
//       })
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.items = action.payload;
//       })
//       .addCase(fetchContacts.rejected, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = action.error.message;
//       })
//       .addCase(addContact.pending, state => {
//         state.contacts.isLoading = true;
//         state.contacts.error = null;
//       })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.items.push(action.payload);
//       })
//       .addCase(addContact.rejected, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = action.error.message;
//       })
//       .addCase(deleteContact.pending, state => {
//         state.contacts.isLoading = true;
//         state.contacts.error = null;
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.items = state.contacts.items.filter(
//           contact => contact.id !== action.payload
//         );
//       })
//       .addCase(deleteContact.rejected, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = action.error.message;
//       });
//   },
// });

// export const { filterChangeAction } = phonebookSlice.actions;
// export const { reducer } = phonebookSlice;

import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    filterChangeAction: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.error.message;
      })
      .addCase(addContact.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.error.message;
      })
      .addCase(deleteContact.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.error.message;
      });
  },
});

export const { filterChangeAction } = phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;
