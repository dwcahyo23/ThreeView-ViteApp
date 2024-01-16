import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector
} from '@reduxjs/toolkit'
import axios from 'axios'
import _, { xorWith } from 'lodash'

export const getStatus = createAsyncThunk('StatusThreeView/getStatus', async () => {
  return await axios({
    method: 'post',
    url: `${import.meta.env.VITE_API_URL}/3viewStatus`,
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
    }
  })
    .then((x) => {
      return x.data.list
    })
    .catch((err) => {
      console.log(err)
      return err
    })
})

const Adapter = createEntityAdapter({
  selectId: (data) => data.mchId
})

export const { selectAll: selectStatus, selectById: selectStatusById } = Adapter.getSelectors(
  (state) => state.StatusThreeView
)

export const LiveStatusSlice = createSlice({
  name: 'StatusThreeView',
  initialState: Adapter.getInitialState({
    procCode: 'FC1',
    pending: 'false',
    error: '',
    lines: []
  }),
  reducers: {
    setLines: {
      reducer: (state, action) => {
        state.lines = action.payload
      },
      prepare: (event) => {
        return { payload: event }
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStatus.pending, (state, action) => {
        state.pending = 'true'
      })
      .addCase(getStatus.fulfilled, (state, action) => {
        state.pending = 'false'
        Adapter.setAll(state, action.payload)
      })
      .addCase(getStatus.rejected, (state, action) => {
        state.error = action.payload
      })
  }
})

const useLines = ({ StatusThreeView }) => StatusThreeView.lines

export const selectLines = createSelector([selectStatus, useLines], (data, lines) => {
  function getFilter() {
    const x = _(data)
      .groupBy((val) => val.lineCodeName)
      .keys()
      .sort()
      .value()

    return x
  }

  if (data) {
    return getFilter()
  }
})

export const filteredStatus = createSelector([selectStatus, useLines], (data, lines) => {
  function getFilter() {
    if (lines.length == 0) {
      return data
    }
    return _.filter(data, (val) => {
      if (!_.includes(lines, val.lineCodeName)) {
        return false
      }
      return val
    })
  }

  if (data) {
    return getFilter()
  }
})

export const { setLines } = LiveStatusSlice.actions

export default LiveStatusSlice.reducer
