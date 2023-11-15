import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect} from 'react'
import ProductComponent from './ProductComponent'
import {setProducts} from "./actions/productAction"

export default function ProductListing() {

  const dispatch = useDispatch()
  const url = ("https://dummyjson.com/products")


  const products = useSelector((state)=> state)
  {
    const fetchProducts = async () => {
    const response = await axios
    .get(url)
    .catch((err)=>{ console.log("Err",err);
    }
    );
    dispatch(setProducts(response.data.products));
    console.log("products",products)
    };

    useEffect(() => {
    
      fetchProducts();
    },[])
  
  }
}
