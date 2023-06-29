import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './Contacts/phonebookReducer';

// export const store = configureStore({
//   reducer,
// });

// import { configureStore } from '@reduxjs/toolkit';
// import { reducer } from './Contacts/phonebookReducer';

// export const store = configureStore({
//   reducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware().concat(auth.middleware),
// });
// import { configureStore } from '@reduxjs/toolkit';
// import { phonebookReducer } from './Contacts/phonebookReducer';
import { userReducer } from './user/user';

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
    user: userReducer,
  },
});
