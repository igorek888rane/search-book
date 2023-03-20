import {configureStore} from "@reduxjs/toolkit";
import books from './slice/books/booksSlice'
import sortFilter from './slice/sortFilter/sortFilter'

export const store = configureStore({
    reducer: {
        books,
        sortFilter
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch