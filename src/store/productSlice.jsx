import {createSlice} from "@reduxjs/toolkit"

// read only obj we can't change the value
export const STATUS = Object.freeze({
    IDLE: 'success',
    ERROR: 'error',
    LOADING: 'loading'
})

const productSlice = createSlice({
    name: "cart",
    initialState: {
        data: [],
        status: STATUS.IDLE,
    },
    reducers: {
        setProducts(state, action){
            //  do not do this inside there due to pure function reducer
            // const response  = await fetch('https://api.escuelajs.co/api/v1/products');
            state.data = action.payload;
        },
        setStatus(state, action){
            
            state.status = action.payload;
        }

    }
})

export const {setProducts, setStatus} = productSlice.actions;
export default productSlice.reducer;

// Thunks
export function fetchProducts(){
    return async function fetchProductThunk(dispatch, getState){
        dispatch(setStatus(STATUS.LOADING))
        try{
            const response  = await fetch('https://api.escuelajs.co/api/v1/products');
            const data = await response.json();

            dispatch(setProducts(data))
            dispatch(setStatus(STATUS.IDLE))

        }catch(error){
            console.log(error)
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}