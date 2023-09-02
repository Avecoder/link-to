import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getDatabase, ref, get, query, orderByChild } from "firebase/database"
import { objToArr } from '../../utils'
import { getAllItems, pushToDB, updateItem, removeItem } from '../../firebaseHooks'


export const fetchUserItems = createAsyncThunk('items/fetchUserItems', async ({uid}) => (await getAllItems(uid)))

export const fetchCreateItem = createAsyncThunk('items/fetchCreateItem', async (data) => (await pushToDB(data)))

export const fetchUpdateItem = createAsyncThunk('items/fetchUpdateItem', async (data) => (await updateItem(data)))

export const fetchRemoveItem = createAsyncThunk('items/fetchRemoveItem', async ({id, uid}) => removeItem(id, uid))

const initialState = {
    items: [],
}

const itemSlice = createSlice({
    name: 'item',
    initialState,
    extraReducers: {
        [fetchUserItems.pending]: (state) => {
            state.status = 'loaded'
        },
        [fetchUserItems.fulfilled]: (state, action) => {
            state.status = 'loading'
            state.items = action.payload
        },
        [fetchUserItems.rejected]: (state) => {
            state.status = 'loading'
            state.items = null
        },
        [fetchCreateItem.pending]: (state) => {
            state.status = 'loaded'
        },
        [fetchCreateItem.fulfilled]: (state, action) => {
            state.status = 'loading'
            state.items = [...state.items, action.payload]
        },
        [fetchCreateItem.rejected]: (state) => {
            state.status = 'loading'
            state.items = null
        },
        [fetchUpdateItem.pending]: (state) => {
            state.status = 'loaded'
        },
        [fetchUpdateItem.fulfilled]: (state, action) => {
            state.status = 'loading'
            let data = {...action.payload.updateItem}
            data.id = action.payload.editId
            state.items = [...state.items.filter(item => item.id !== data.id), data]
        },
        [fetchUpdateItem.rejected]: (state) => {
            state.status = 'loading'
            console.log('rejected')
        },
        [fetchRemoveItem.pending]: (state) => {
            state.status = 'loaded'
        },
        [fetchRemoveItem.fulfilled]: (state, action) => {
            state.status = 'loading'
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        [fetchRemoveItem.rejected]: (state) => {
            state.status = 'loading'
            state.items = []
        },
      }
})

export const itemReducer = itemSlice.reducer
