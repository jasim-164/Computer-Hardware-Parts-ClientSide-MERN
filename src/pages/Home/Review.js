import React from 'react';
import { useQuery } from "react-query";
const Review = () => {
    // const { isLoading, error, data }= useQuery ("services",fetch('http://localhost:8000/reviews'));
    // console.log(data);
    const fetchUsers = async () => {
        const res = await fetch("http://localhost:8000/reviews");
        return res.json();
      };
      
        const { data, status, isLoading } = useQuery("reviews", fetchUsers);
        console.log(data);
 
    return (
        <div className="card shadow-xl grid lg:grid-cols-3">
        {
            data?.map((review) =>
                <div className="card-body">
                
                <div className="flex items-center justify-center flex-col">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                        <img src={review?.image} alt=""/>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl '>{review?.author}</h4>
                        <p className='text-xl '>Rating: {review?.rating}</p>
                        
                    </div>
                    <p className="text-center text-white text-sm">{review?.text}</p>
                </div>
                
            </div>

            )
        }

       
        </div>
    );
};

export default Review;