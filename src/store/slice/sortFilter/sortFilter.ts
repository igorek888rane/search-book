import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {filtersType, sortByType} from './sortFilterType'


interface sortFilterState {
    sortBy: sortByType
    filters: filtersType
}

const initialState: sortFilterState = {
    sortBy: 'newest',
    filters: 'all'
}

export const sortFilter = createSlice({
    name: 'sortFilter',
    initialState,
    reducers: {
        setSortBy(state, action: PayloadAction<sortByType>) {
            state.sortBy = action.payload
        },
        setFilter(state, action: PayloadAction<filtersType>) {
            state.filters = action.payload
        }
    },
})

export const {setSortBy,setFilter} = sortFilter.actions

export default sortFilter.reducer