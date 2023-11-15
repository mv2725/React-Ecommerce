import React from "react";
import Header from "../Header";
import ProductComponent from "../ProductComponent";
import ProductDetail from "../ProductDetail";
import ProductListing from "../ProductListing";
import Login from "../Login/LoginF";
// import productComponent from './components/ProductComponent'

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <ProductComponent />
        {/* <ProductDetail /> */}
        <ProductListing />
      </div>
      {/* <ProductComponent /> */}
    </>
  );
}
