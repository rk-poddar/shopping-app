import {createSlice} from "@reduxjs/toolkit"
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = [];
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        additem(state, action){
            const item = action.payload
            const isItemExict = state.find((products) => products.id === item.id);
            
            if(isItemExict){
                state.forEach(products=>{
                    if(products.id===item.id){
                        products.qty += 1;
                    }
                })
            }else{
                const products = action.payload
                return [
                    ...state,{
                        ...products,
                        qty: 1
                    }
                ]
            }
            
        },
        removeitem(state, action){
            return state.filter(item => item.id !== action.payload);
        },

        decItem(state, action){
            let updateItem = state.map((item) => {
                if(item.id === action.payload){
                    let qtys = item.qty - 1

                    // number can not be leser than 1
                    if (qtys <= 0){
                        qtys = 1;
                        toast.error('Min limit exceed', {
                            autoClose:2000,
                            position: "bottom-right"
                        })
                    }
                    return {
                        ...item,
                        qty: qtys
                    }
                }
                else{
                    return item
                }
            });
            return updateItem
        }
    }
})

export const {additem, removeitem, decItem} = cartSlice.actions;
export default cartSlice.reducer;