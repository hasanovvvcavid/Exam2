import { createSlice } from '@reduxjs/toolkit'


const initialState = ({
  basket: [],
})




export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBasket: (state, action) =>{
        const exsistProduct = state.basket.find((product) => product._id = action.payload._id)

        if(!exsistProduct){
            state.basket.push({...action.payload, count: 1})
        }else{
            exsistProduct.count ++
        }
    },
    deleteBasket: (state, action) =>{
      state.basket = state.basket.filter((product)=> product._id = action.payload._id)
    }
  },
  extraReducers: () => {
    
  },
})


export const { addBasket, deleteBasket} = basketSlice.actions

export default basketSlice.reducer