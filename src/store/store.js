import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './Contacts/phonebookReducer';
import { userReducer } from './user/user';

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
    user: userReducer,
  },
});
