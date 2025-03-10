import { configureStore } from '@reduxjs/toolkit';
import birthdaysReducer from './birthdaysSlice';

const store = configureStore({
    reducer: {
        birthdays: birthdaysReducer,
    },
});

export default store;