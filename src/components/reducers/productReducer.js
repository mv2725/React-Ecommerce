import { ActionTypes } from "../actions/constants/action-type"

const initialState = {
    loading:"",
     products:[],
};

export const productReducer = (state= initialState,{type,payload}) => {
 switch (type)
 {
    case ActionTypes.set_Products:
     return{...state,products:payload};
     default:
        return state;
 }
}


 export const cartReducer = (cart=[] , action) => {
    console.log("cart",cart);
    console.log("action",action);
    console.log("remove",action);
   
   
   if (action.type=="ADD")
   {
    const  tempcart = cart.filter((products)=> products.id === action.payload.id)
        
      if (tempcart<1)
      {
          return[...cart,action.payload];
      }
      else{
         return cart;
      }
   }
   if (action.type ==="Remove")
   {
      const removeCart = cart.filter((products)=>products.id!==action.payload.id) 
      
         // return[...cart,action.payload];
         return removeCart;

   }
   if (action.type === "increase"){
      let tempcart=cart.map((product)=>{
         if(product.id === action.payload.id){
            return {...product, quantity:product.quantity+1}
         }
         return product;
   });
   return tempcart;
   }
   if (action.type === "decrease"){
      let tempcart=cart.map((product)=>{
         if(product.id === action.payload.id){
            return {...product, quantity:product.quantity-1}
         }
         return product;
   });
   return tempcart;
   }
 

   return cart;
}