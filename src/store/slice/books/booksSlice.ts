import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {filtersType, IBook} from "./booksType";
import {fetchBooks} from "./booksAsyncThunk";

export interface BooksState {
    books: IBook[]
    filters: filtersType
    loading: boolean
    totalItems: number
    error: string
}

const initialState: BooksState = {
    books: [],
    filters: 'all',
    loading: false,
    totalItems: 0,
    error: ''

}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setFilter(state, action: PayloadAction<filtersType>) {
            state.filters = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchBooks.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchBooks.fulfilled, (state, {payload}) => {
            state.totalItems = payload.totalItems
            state.loading = false
            if (state.filters === 'all') {
                state.books = payload.items
                return
            }
            state.books = payload.items
                .filter(book => book.volumeInfo.categories
                    ?.map(el => el.toLowerCase())
                    .includes(state.filters))
        })
        builder.addCase(fetchBooks.rejected, (state) => {
            state.loading = false
            state.error = 'Error'
        })
    }
})

export const {setFilter} = booksSlice.actions

export default booksSlice.reducer