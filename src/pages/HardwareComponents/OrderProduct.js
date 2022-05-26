import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const OrderProduct = () => {
const {id}= useParams();
let [value,setValue]= useState(0);
let [userPrice,setPrice]=useState();
const [user, loading, error] = useAuthState(auth);
const {
  register,
  formState: { errors },
  reset,
  handleSubmit,
} = useForm();

// const {data}= useQuery(["product","_id"],fetch(`http://localhost:8000/products/${id}`).then(result => result.json()));
// console.log(data);
// console.log(id);
const fetchUsers = async () => {
 
    
    const res = await fetch(`http://localhost:8000/products/${id}`);
    return res.json();
  };
  const{data:product,isLoading,refetch}= useQuery('product',fetchUsers)
  if(isLoading) {
   
    return <Loading/>
    
  }
  



    
    const onSubmit = (data1 , event)=>{
      event.preventDefault();
      console.log(data1);
      fetch('http://localhost:8000/booking',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data1)
      })
      .then(res=> res.json())
      .then(result=> {
        // console.log("result paisi', result);
        if(result.result.insertedId){
          toast.success('order successfully added');
          refetch();
          reset();
        }
        else{
          toast.error("Failed to add the Product");
        }
      })

    }

    


  return (
    <div>
      
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src={product?.picture}
            alt="Product"
          />
          
          <div>
            <h1 class="text-5xl font-bold mb-3">Product Name: {product?.name}</h1>
            <h1 class="text-2xl font-bold mb-3">Product Id: {product?._id}</h1>
            <h1 class="text-5xl font-bold mb-3">Price: {product?.price}</h1>
            <h1 class="text-5xl font-bold mb-3">Available Quantity: {product?.quantity}</h1>
          
            <p class="py-6">
            {product?.description}
            </p>

            




        
            
           
            
            

          </div>
        </div>
      </div>
      
      <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-center text-2xl font-bold">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              readOnly value={user?.email || ''}
              className="input input-bordered w-full max-w-xs"
              {...register("email")}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
             
              readOnly value={user?.displayName || ''}
              className="input input-bordered w-full max-w-xs"
              {...register("customerName")}
            />
    
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="number"
              placeholder="Please place a valid Quantity that you want to Buy"
              
              className="input input-bordered w-full max-w-xs"
              {...register("quantity", {required: true, message: "Please place a valid Quantity",min: 1, max: product?.quantity })}
            />
            <label className="label">
              {errors.quantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  <h1>please enter a Quantity</h1>
                </span>
              )}
              {errors.quantity?.type==="min" && (
                <span className="label-text-alt text-red-500">
                  <h1>please enter a minimum valid Quantity</h1>
                </span>
              )}
              {errors.quantity?.type==="max" && (
                <span className="label-text-alt text-red-500">
                  <h1>please enter a maxmimum valid Quantity</h1>
                </span>
              )}
            </label>
          </div>

         
          <input
            className="btn w-full max-w-xs text-white"
            type="submit"
            value="Order"
          />
        </form>
  
      </div>
    </div>



    </div>
  );
};

export default OrderProduct;
