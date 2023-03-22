import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {sortByType} from './formType'
import {filtersType} from "../books/booksType";


interface sortFilterState {
    search: string
    sortBy: sortByType
    filter: filtersType
    startIndex: number
    maxResult: number
}

const initialState: sortFilterState = {
    search: '',
    sortBy: 'newest',
    filter: 'all',
    startIndex: 0,
    maxResult: 30
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setSortBy(state, action: PayloadAction<sortByType>) {
            state.sortBy = action.payload
        },
        setFilter(state, action: PayloadAction<filtersType>) {
            state.filter = action.payload
        },
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload
        },
        setStartIndex(state, action: PayloadAction<number>) {
            state.startIndex = action.payload
        }
    },
})

export const {setSortBy, setSearch, setFilter, setStartIndex} = formSlice.actions

export default formSlice.reducer