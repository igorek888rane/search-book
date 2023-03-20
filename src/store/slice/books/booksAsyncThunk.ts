import {createAsyncThunk} from "@reduxjs/toolkit";
import {booksApi, IBooksApi} from "../../../api/booksApi";

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