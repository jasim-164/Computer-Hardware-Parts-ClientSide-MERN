import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";

const OrderProduct = ({product}) => {
const {id}= useParams();
let [value,setValue]= useState(0);
let [userPrice,setPrice]=useState();


// const {data}= useQuery(["product","_id"],fetch(`http://localhost:8000/products/${id}`).then(result => result.json()));
// console.log(data);
// console.log(id);
const fetchUsers = async () => {
    
    const res = await fetch(`http://localhost:8000/products/${id}`);
    return res.json();
  };
  const{data,isLoading,refetch}= useQuery('product',fetchUsers)
  if(isLoading) {
   
    return <Loading/>
    
  }
  


  const handleQuantityPlus=()=>{
     
      value++;
     
      if(value<=data?.quantity)
      {
        setValue(value);
        console.log(value);
        
      }
      else{

          value--;
          

      }
      userPrice=Number(value)*Number(data?.price);
      setPrice(userPrice);
  }


  
  const handleQuantityNeg=()=>{
      value=value-1;
      console.log(value);
      if(value>=1)
      {
        setValue(value);
        console.log(value);
        
      }
      else{
          value++;

      }
      userPrice=value*data?.price;
      setPrice(userPrice);
      
  }
  
  console.log(data);

  return (
    <div>
      
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src={data?.picture}
            alt="Product"
          />
          
          <div>
            <h1 class="text-5xl font-bold">Product Name:{data?.name}</h1>
            <h1 class="text-2xl font-bold">Product Id: {data?._id}</h1>
            <h1 class="text-5xl font-bold">Price: {data?.price}</h1>
            <h1 class="text-5xl font-bold">Available Quantity: {data?.quantity}</h1>
          
            <p class="py-6">
            {data?.description}
            </p>

            
            <div className=" flex justify-center align-center lg:flex-row">
            <button class="btn btn-primary mx-5" onClick={()=>handleQuantityPlus()}>+</button>
            <h1>{value}</h1>
            <button class="btn btn-primary" onClick={()=>handleQuantityNeg()}>-</button>
            
            </div>
            <button class="btn  btn-ghost " onClick={()=>handleQuantityNeg()} disabled={value===0}>Order Now</button>
        
            
           
            
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProduct;
