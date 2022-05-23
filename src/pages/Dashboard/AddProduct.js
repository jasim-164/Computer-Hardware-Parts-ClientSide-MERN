import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddProduct = () => {
  const imageStorageKey = "0546662684ed022342787a675f4a1e2e";
 // const { data: services, isLoading } = useQuery('products', () => fetch('http://localhost:8000/products').then(res => res.json()))
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = async (data) => {
      //console.log(data.image[0]);
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
            name: data.name,
            description: data.description,
            price: data.price,
            quantity: data.quantity,
            image: img,
          };
          
          // send to your database
           fetch("http://localhost:8000/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              //authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
                console.log(inserted)
              if (inserted?.insertedId) {
                toast.success("Product added successfully");
               reset();
              } else {
                toast.error("Failed to add the Product");
              }
            });
        }
      });
  };


  return (
    <div>
      <h2 className="text-2xl text-center">Add a New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className=" items-center justify-center flex-col flex" >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Name</span>
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
            <span className="label-text">Product Description</span>
          </label>
          <input
            type="text"
            placeholder="Product Description"
            className="input input-bordered w-full max-w-xs"
            {...register("description", {
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
            <span className="label-text">Quantity</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-full max-w-xs"
            {...register("quantity", {
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
            <span className="label-text">price</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-full max-w-xs"
            {...register("age", {
              min: 1,
              max: 9999999,
              required: {
                value: true,
                message: "Price is Required",
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
            <span className="label-text">Product Photo</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
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
  );
};

export default AddProduct;
