import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";
const MyProfile = () => {
  const [user] = useAuthState(auth);

 console.log(user);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const email = user?.email;
  const fetchUsers = async () => {
    const res = await fetch(`http://localhost:8000/user/${email}`);
    return res;
  };
  const{data:userdata,isLoading,refetch}= useQuery('userData',fetchUsers)
  if(isLoading) {
   
    return <Loading/>
    
  }
  
  console.log(userdata);

  const onSubmit = async (data) => {
    
    
        
        //const currentUser = {email: email};
        if(email){
            fetch(`http://localhost:8000/user/${email}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json',
                    
                },
                body:JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(data => {
                console.log('data inside useToken', data);
               
                //const university = data.university;
                //localStorage.setItem('accessToken', accessToken);
                
                reset();
                refetch();
            })
        }
        

  }
  return (
    <div>

      <div class="hero bg-base-200 mb-10">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src={user?.photoURL}
            height="450"
            width="300"
            class="max-w-sm rounded-lg shadow-2xl"
            alt="profile"
          />
          <div>
            <h1 class="text-5xl font-bold my-10">Your Bio Data!</h1>
            <h1 class="text-xl font-bold">Name: {user?.displayName}</h1>
            <h1 class="text-xl font-bold">Email: {user?.email}</h1>
            <p class="pt-6">University:{userdata?.university}</p>
            <p class="">Location:{userdata?.location}</p>
            <p class="">Phone Number:{userdata?.phone_number}</p>
            <p class="">Linkdin Link:{userdata?.linkdin_link}</p>
            <button class="btn btn-primary">Go Home</button>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className=" items-center justify-center flex-col flex" >
      <h1>Update your profile</h1>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Education</span>
        </label>
        <input
          type="text"
          placeholder="Your University or College Name"
          className="input input-bordered w-full max-w-xs"
          {...register("university", {
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
          <span className="label-text">Location</span>
        </label>
        <input
          type="text"
          placeholder="Your Present Address"
          className="input input-bordered w-full max-w-xs"
          {...register("location", {
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
        <span className="label-text">Phone Number</span>
      </label>
      <input
        type="text"
        placeholder="Your Active Phone Number"
        className="input input-bordered w-full max-w-xs"
        {...register("phone_number", {
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
      <span className="label-text">Linkdin Profile Link</span>
    </label>
    <input
      type="text"
      placeholder="Your Linkdin Link"
      className="input input-bordered w-full max-w-xs"
      {...register("linkdin_link", {
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

      <input
      className="btn w-full max-w-xs text-white"
      type="submit"
      value="Add"
    />
      </form>
      
    </div>
  );
};

export default MyProfile;
