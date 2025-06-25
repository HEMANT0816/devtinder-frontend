import { createSlice } from '@reduxjs/toolkit';
import { setUser } from './userSlice';
import { setPageNumber } from './feedSlice';

const initialState = {
  pendingRequests: [],
  userNumber:0,
  pageNumber:1,
};

export const pendingRequestSlice = createSlice({
  name: 'pendingRequests',
  initialState,
  reducers: {
    fetchPendingRequestsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPendingRequestsSuccess(state, action) {
      state.loading = false;
      state.pendingRequests = action.payload;
    },
    setUserNumber(state) {
      state.userNumber = state.userNumber + 1;
    },
    resetUserNumber(state) {
      state.userNumber = 0;
    },
    incrementPageNumber(state) {
      state.pageNumber = state.pageNumber + 1;
    }
    
  }
});

export const {
  fetchPendingRequestsStart,
  fetchPendingRequestsSuccess,
  setUserNumber,
  resetUserNumber,
  incrementPageNumber,
} = pendingRequestSlice.actions;

export default pendingRequestSlice.reducer;
