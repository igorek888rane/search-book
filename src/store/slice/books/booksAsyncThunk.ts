import {createAsyncThunk} from "@reduxjs/toolkit";
import {booksApi, getOneBook, IBooksApi} from "../../../api/booksApi";

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async ({search, sortBy}: IBooksApi, thunkAPI) => {
        try {
            return await booksApi({search, sortBy})
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось найти книги")
        }
    }
)

export const fetchOneBook = createAsyncThunk('books/fetchOneBook', async (id: string, thunkAPI) => {
    try {
        return await getOneBook(id)
    } catch (e) {
        return thunkAPI.rejectWithValue("Не удалось найти книгу")
    }
})
