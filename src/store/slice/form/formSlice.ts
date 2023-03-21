import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {sortByType} from './formType'
import {filtersType} from "../books/booksType";


interface sortFilterState {
    search: string
    sortBy: sortByType
    filters: filtersType
    startIndex: number
    maxResult:number


}

const initialState: sortFilterState = {
    search: '',
    sortBy: 'newest',
    filters: 'all',
    startIndex: 0,
    maxResult:30



}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setSortBy(state, action: PayloadAction<sortByType>) {
            state.sortBy = action.payload
        },
        setFilter(state, action: PayloadAction<filtersType>) {
            state.filters = action.payload
        },
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload
        },
    },
})

export const {setSortBy, setSearch,setFilter} = formSlice.actions

export default formSlice.reducer