import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { sortByType} from './sortType'


interface sortFilterState {
    sortBy: sortByType
}

const initialState: sortFilterState = {
    sortBy: 'newest',
}

export const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSortBy(state, action: PayloadAction<sortByType>) {
            state.sortBy = action.payload
        },

    },
})

export const {setSortBy} = sortSlice.actions

export default sortSlice.reducer