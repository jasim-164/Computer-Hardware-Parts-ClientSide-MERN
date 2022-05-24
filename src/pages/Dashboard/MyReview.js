import React from 'react';
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";

const MyReview = () => {
    const imageStorageKey = "0546662684ed022342787a675f4a1e2e";
 // const { data: services, isLoading } = useQuery('products', () => fetch('http://localhost:8000/products').then(res => res.json()))
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {

      console.log(data.image[0]);
    const image = data.image[0];
    const formData = new FormData();
    
    formData.append("image", image);
    console.log(formData);

    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          console.log(img)
          const product = {
            author: data.name,
            text: data.text,
            rating: data.rating,
            image: img,

          };
          
          // send to your database
           fetch("https://radiant-inlet-73945.herokuapp.com/reviews", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              //authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
                console.log(inserted);
              if (inserted?.insertedId) {
                toast.success("Product added successfully");
               reset();
              } else {
                console.log(inserted);
                toast.error("Failed to add the Product");

                
                
              }
            });
        }
      });
  };
    return (
        <div>
        <div>
        <h2 className="text-2xl text-center">Add a New Review</h2>
        <form onSubmit={handleSubmit(onSubmit)} className=" items-center justify-center flex-col flex" >
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">User Review</span>
            </label>
            <input
              type="text"
              placeholder="Give a Review"
              className="input input-bordered w-full max-w-xs"
              {...register("text", {
                required: {
                  value: true,
                  message: "Description is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
  
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              placeholder="your rating"
              className="input input-bordered w-full max-w-xs"
              {...register("rating", {
                min: 1,
                max: 999,
                required: {
                  value: true,
                  message: "Quantity is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
  
  
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your Photo</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full max-w-xs"
              {...register("image", {
                required: {
                  value: false,
                  message: "Image is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
  
          <input
            className="btn w-full max-w-xs text-white"
            type="submit"
            value="Add"
          />
        </form>
      </div>
        </div>
    );
};

export default MyReview;