import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Create the slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    custemer: null,
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
    signupSuccess: (state, action) => {
      state.token = action.payload;
      state.error = null;
    },
    signupFailure: (state, action) => {
      state.error = action.payload;
    },
    fetchProfileSuccess: (state, action) => {
      state.custemer = action.payload;
      state.error = null;
    },
    fetchProfileFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Export actions and reducer
export const {
  loginSuccess,
  loginFailure,
  signupSuccess,
  signupFailure,
  fetchProfileSuccess,
  fetchProfileFailure,
} = authSlice.actions;

export default authSlice.reducer;

// Async action creators
export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3001/custemer/login', credentials);
    if (response) {
      const { token } = response.data;
      localStorage.setItem('token', token); // Store token in localStorage
      dispatch(loginSuccess(token));
      return "success";
    }
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const signupUser = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3001/signup', credentials);
    if (response) {
      const { token } = response.data;
      localStorage.setItem('token', token); // Store token in localStorage
      dispatch(signupSuccess(token));
      return "success";
    }
  } catch (error) {
    dispatch(signupFailure(error.message));
  }
};

export const fetchProfileUser = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:3001/custemer/profile/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response) {
      const { user } = response.data;
      dispatch(fetchProfileSuccess(user));
      return "success";
    }
  } catch (error) {
    dispatch(fetchProfileFailure(error.response.data));
  }
};
