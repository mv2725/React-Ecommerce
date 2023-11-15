import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { cartReducer } from "./productReducer";

export const reducers = combineReducers({
    allproducts :productReducer,
    cart:cartReducer,   
})

