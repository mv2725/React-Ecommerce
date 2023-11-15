import { ActionTypes } from "./constants/action-type"

export const setProducts = (products) =>{
return {

    type: ActionTypes.set_Products,
    payload: products,

};
};

export const selectedProducts = (product) =>{
    return {
    
        type: ActionTypes.selected_Products,
        payload: product,
    
    };
    };
    
    export const removeProducts = (product) =>{
        return {
        
            type: ActionTypes.selected_Products,
            payload: product,
        
        };
        };