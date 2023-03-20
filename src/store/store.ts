import {configureStore} from "@reduxjs/toolkit";
import books from './slice/books/booksSlice'
import sort from './slice/sort/sortSlice'

export const store = configureStore({
    reducer: {
        books,
        sort
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch