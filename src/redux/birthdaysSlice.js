import { createSlice } from '@reduxjs/toolkit';
import { isToday, parseISO } from 'date-fns';

const initialState = {
    birthdays: [],
    sortBy: 'name', // Default sorting
};

const birthdaysSlice = createSlice({
    name: 'birthdays',
    initialState,
    reducers: {
        addBirthday: (state, action) => {
            state.birthdays.push(action.payload);
        },
        removeBirthday: (state, action) => {
            state.birthdays = state.birthdays.filter((birthday) => birthday.id !== action.payload);
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        },
        // Load from local storage on app start
        loadBirthdays: (state, action) => {
            state.birthdays = action.payload;
        },
        updateBirthday: (state, action) => {
            const { id, name, date, image } = action.payload;
            const birthdayIndex = state.birthdays.findIndex((birthday) => birthday.id === id);
            if (birthdayIndex !== -1) {
              state.birthdays[birthdayIndex] = { ...state.birthdays[birthdayIndex], name, date, image };
            }
        }
    },
});

export const { addBirthday, removeBirthday, setSortBy, loadBirthdays, updateBirthday } = birthdaysSlice.actions;

export const selectBirthdays = (state) => {
    const { birthdays, sortBy } = state.birthdays;

    let sortedBirthdays = [...birthdays]; // Create a copy

    if (sortBy === 'name') {
        sortedBirthdays.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'date') {
        sortedBirthdays.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
    return sortedBirthdays;
};

// Selector to get birthdays happening today
export const selectBirthdaysToday = (state) => {
    const today = new Date();
    return state.birthdays.birthdays.filter((birthday) => {
      try {
        const birthdayDate = parseISO(birthday.date);
        return isToday(birthdayDate);
      } catch (error) {
        console.error("Error parsing or comparing date:", birthday.date, error);
        return false; // Or handle the error in another way
      }
    });
};


export default birthdaysSlice.reducer;