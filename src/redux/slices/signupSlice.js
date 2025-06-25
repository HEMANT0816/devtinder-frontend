import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  age: '',
  gender: '',
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setSignupData: (state, action) => {
      return { ...state, ...action.payload };
    },
    updateSignupField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetSignupData: () => initialState,
  },
});

export const { setSignupData, updateSignupField, resetSignupData } = signupSlice.actions;
export default signupSlice.reducer;
