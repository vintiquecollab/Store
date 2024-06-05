import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Create the slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null,
    isLoggedIn: localStorage.getItem('token') ? true : false,
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.error = null;
      state.isLoggedIn = true;
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
      state.user = action.payload;
      state.error = null;
    },
    fetchProfileFailure: (state, action) => {
      state.error = action.payload;
    },
    custemerUpdated: (state, action) => {
      state.custemer = action.payload;
      state.error = null;
      state.isLoggedIn = true;
    },
    deletecustemer: (state, action) => {
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
  deletecustemer,
  custemerUpdated
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

export const signupUser = (custemerData) => async (dispatch) => {
  try {   
    const res = await axios.post('http://localhost:3001/custemer/admin', custemerData);

    if (res) {
      const { custemer } = res.data;
      dispatch({ type: 'CUSTEMER_CREATED', payload: custemer });
      return "success";
    }
  } catch (error) {
    dispatch({ type: 'CUSTEMER_FAILED', payload: error.response.data });
  }
};

export const fetchProfileUser = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found');
    }

    const response = await axios.get('http://localhost:3001/custemer/profile/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
   

    if (response) {
      dispatch(fetchProfileSuccess(response.data));
    }
  } catch (error) {
    dispatch(fetchProfileFailure(error.message));
  }
};
export const updateCustemer = (custemerId, Datacustemer) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:3001/custemer/${custemerId}`, Datacustemer);

    if (res) {
      const { custemer } = res.data;
      dispatch({ type: 'CUSTEMER_UPDATED', payload: custemer });
      return "success";
    }
  } catch (error) {
    dispatch({ type: 'CUSTEMER_FAILED', payload: error.response.data });
  }
};

export const deleteCustemer = (custemerId) => async (dispatch) => {
  try {
    const res = await axios.delete(`http://localhost:3001/custemer/${custemerId}`);
    console.log(res)
    
    if (res) {
      dispatch({ type: 'CUSTEMER_DELETED', payload: custemerId });
      return "success";
    }
  } catch (error) {
    dispatch({ type: 'CUSTEMER_FAILED', payload: error.response.data });
  }
};
