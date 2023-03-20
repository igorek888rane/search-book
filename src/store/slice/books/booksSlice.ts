import {createSlice} from '@reduxjs/toolkit'
import {IBook} from "./booksType";
import {fetchBooks} from "./booksAsyncThunk";

export interface BooksState {
    books: IBook[]
    loading: boolean
    totalItems: number
    error: string
}

const initialState: BooksState = {
    books: [],
    loading: false,
    totalItems: 0,
    error: ''

}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchBooks.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchBooks.fulfilled, (state, {payload}) => {
            state.books = payload.items
            state.totalItems = payload.totalItems
            state.loading = false
        })
        builder.addCase(fetchBooks.rejected, (state) => {
            state.loading = false
            state.error = 'Error'
        })
    }
})

export const {} = booksSlice.actions

export default booksSlice.reducer