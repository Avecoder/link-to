import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const initialState = {
    data: null,
    status: 'loading'
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.data = action.payload
        },
        removeUser(state) {
            state.data = null
        }
    },

})


export const userReducer = userSlice.reducer

export const { setUser, removeUser } = userSlice.actions