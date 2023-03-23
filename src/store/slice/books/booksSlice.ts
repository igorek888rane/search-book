import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IBook } from './booksType'
import { fetchBooks, fetchOneBook } from './booksAsyncThunk'

export interface BooksState {
	books: IBook[]
	book: IBook | null
	loading: boolean
	totalItems: number
	error: string
}

const initialState: BooksState = {
	books: [],
	book: null,
	loading: false,
	totalItems: 0,
	error: '',
}

export const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		setBookClear(state) {
			state.book = null
		},
		setError(state, action: PayloadAction<string>) {
			state.error = action.payload
		},
		setBooksClear(state) {
			state.books = []
		},
	},
	extraReducers(builder) {
		builder.addCase(fetchBooks.pending, state => {
			state.loading = true
			state.error = ''
		})
		builder.addCase(fetchBooks.fulfilled, (state, { payload }) => {
			state.totalItems = payload.totalItems
			state.loading = false
			state.books.push(...payload.items)
		})
		builder.addCase(fetchBooks.rejected, state => {
			state.loading = false
			state.error = 'Error'
		})
		builder.addCase(fetchOneBook.pending, state => {
			state.loading = true
			state.error = ''
		})
		builder.addCase(fetchOneBook.fulfilled, (state, { payload }) => {
			state.book = payload
			state.loading = false
		})
		builder.addCase(fetchOneBook.rejected, state => {
			state.loading = false
			state.error = 'Error'
		})
	},
})

export const { setBookClear, setError, setBooksClear } = booksSlice.actions

export default booksSlice.reducer
