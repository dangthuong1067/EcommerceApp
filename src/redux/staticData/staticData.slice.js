import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'
import request from '../../helpers/request'

const INIT_STATE = {
  banners: [],
  saleProducts: [],
  popularProducts: [],
  categoriesList: []

}

const staticSlice = createSlice({
  name: 'static',
  initialState: INIT_STATE,
  reducers: {

  },

  extraReducers: builder => {
    builder
      .addCase(getStaticDataThunk.fulfilled, (state, action) => {
        state.banners = action.payload
      })

  }

})

export const getStaticDataThunk = createAsyncThunk(
  'home/getStaticDataThunk',
  async (parameter, thunkAPI) => {
    const responseBanner = request(
      '/home/banners',
      undefined,
      thunkAPI
    )

    console.log('responseBanner', responseBanner);

    const responseSaleProducts = request(
      '/home/products',
      {
        query: { tag: 'sale' }
      },
      thunkAPI
    )

    const responsePoPularProducts = request(
      '/home/products',
      {
        query: { tag: 'popular' }
      },
      thunkAPI
    )

    const responseCategoriesList = request(
      '/home/categories',
      undefined,
      thunkAPI
    )

    const responseAll = await Promise.all([responseBanner, responseSaleProducts, responsePoPularProducts, responseCategoriesList])
    console.log('responseAll', responseAll);

    const processResponseAll = async () => {
      for (const response of responseAll) {
        console.log('response', response);

        // const { data: { banners } } = response.json();
        const { data: { categories } } = await response.json();
        console.log('data categories', categories);
        // console.log('data banners', banners);

      }
    }
    await processResponseAll()
    // const result = await processResponseAll()
    // console.log('result', result);
    // if (result) return result
    // return thunkAPI.rejectWithValue('Can not fetch data');
  }
)


export default staticSlice.reducer
