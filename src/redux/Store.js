import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import feedReducer from "./slices/feedSlice"
import SignupReducer from './slices/signupSlice'
import pendingRequestSlice from './slices/pendingRequestSlice';
import pendingRequests from './slices/pendingRequestSlice'; 


export const store = configureStore({
  reducer: {
    user: userReducer,
    feed:feedReducer,
    signup: SignupReducer,
    pendingRequests: pendingRequestSlice,
  },
})