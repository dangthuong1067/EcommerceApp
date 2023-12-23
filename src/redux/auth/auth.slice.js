import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'


const INIT_STATE = {
  token: null,
  loading: true,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: INIT_STATE,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTokenThunk.fulfilled, (state, action) => {
        state.token = action.payload
        state.loading = false
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.token = action.payload
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.token = null
      })
  }
})

export const getTokenThunk = createAsyncThunk(
  'auth/getTokenThunk',
  async () => await AsyncStorage.getItem('token')


)

export const loginThunk = createAsyncThunk(
  'auth/loginThunk',
  async (data, thunkAPI) => {
    console.log('process.env.API_URL', process.env.API_URL);
    const { username, password } = data
    console.log('username password', username, password);
    const response = await fetch(
      `${process.env.API_URL}/auth/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      }
    )
    console.log('response', response);
    if (!response.ok) {
      return thunkAPI.rejectWithValue('Can not login')
    }

    const { data: { token } } = await response.json()
    await AsyncStorage.setItem('token', token)
    return token
  }
)


export const signupThunk = createAsyncThunk(
  'auth/signupThunk',
  async (data, thunkAPI) => {
    console.log('process.env.API_URL', process.env.API_URL);
    const { username, email, password, confirmPassword, role } = data;
    const response = await fetch(
      `${process.env.API_URL}/auth/signup`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmPassword,
          role
        })
      }
    )
    console.log('response', response);
    if (!response.ok) {
      return thunkAPI.rejectWithValue('Can not login');
    }

  }
)
export const logoutThunk = createAsyncThunk(
  'auth/logoutThunk',
  async () => {
    await AsyncStorage.removeItem('token')
  }
)
export default authSlice.reducer