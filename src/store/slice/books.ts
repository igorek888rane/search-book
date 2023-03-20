import {createSlice} from '@reduxjs/toolkit'

export interface BooksState {
    books: []
}

const initialState: BooksState = {
    books: [],
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {

    },
})

export const {} = booksSlice.actions

export default booksSlice.reducer