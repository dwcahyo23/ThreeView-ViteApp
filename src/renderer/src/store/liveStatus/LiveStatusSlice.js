import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  procCode: 'FC1',
  pending: 'false',
  entities: []
}

export const getStatus = createAsyncThunk('StatusThreeView/getStatus', async () => {
  return await axios({
    method: 'post',
    url: `${import.meta.env.VITE_API_URL}/3viewStatus`,
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
    }
  })
    .then((x) => {
      console.log(x)
      return x.data.list
    })
    .catch((err) => {
      console.log(err)
      return err
    })
})

export const LiveStatusSlice = createSlice({
  name: 'StatusThreeView',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStatus.fulfilled, (state, action) => {
      action.payload
    })
  }
})

export default LiveStatusSlice.reducer
