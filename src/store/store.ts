import {configureStore} from "@reduxjs/toolkit";
import books from './slice/books/booksSlice'
import form from './slice/form/formSlice'

export const store = configureStore({
    reducer: {
        books,
        form
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch