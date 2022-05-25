import React from "react";
import { Link } from "react-router-dom";

const Product = ({product}) => {
    const {_id,name,picture,description,price,quantity} = product;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src={picture}
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <h2 class="">price: {price}</h2>
        <h2 class="">available quantity: {quantity}</h2>
        <p>{description?.slice(0,50)}</p>
        <div class="card-actions">
        <Link to={`/orderProduct/${_id}`} product={product}><button class="btn btn-primary ">Update</button></Link>
        

        </div>
      </div>
    </div>
  );
};

export default Product;
