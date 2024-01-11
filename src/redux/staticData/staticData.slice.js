import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'

const INIT_STATE = {
  loadingSpash: true,

}

const staticSlice = createSlice({
  name: 'static',
  initialState: INIT_STATE,
  reducers: {
    loadingSpashScreen: (state, action) => {
      state.loadingSpash = action.payload

    },

  },

  extraReducers: builder => {
    builder
      .addCase(logoutThunk.fulfilled, (state, action) => {
        state.loadingSpash = false;
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
    const { email, password } = data;
    const response = await fetch(
      `${process.env.API_URL}/auth/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      }
    )
    if (!response.ok) {
      return thunkAPI.rejectWithValue('Bạn nhập sai email hoặc mật khẩu. Vui lòng nhập lại!');
    }

    const { data: { token } } = await response.json();
    await AsyncStorage.setItem('token', token);
    return token
  }
)


export const signupThunk = createAsyncThunk(
  'auth/signupThunk',
  async (data, thunkAPI) => {
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

    if (!response.ok) {
      const { message } = await response.json();
      if (message === "Duplicate Email. Please try again") {
        return thunkAPI.rejectWithValue("Email này đã được dùng. Vui lòng tạo email khác!");
      }
    }
  }
)
export const logoutThunk = createAsyncThunk(
  'auth/logoutThunk',
  async () => {
    await AsyncStorage.removeItem('token');
  }
)
export default staticSlice.reducer

export const { loadingSpashScreen } = staticSlice.actions;