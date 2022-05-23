import React from "react";
import { Carousel } from "react-bootstrap";
import photo1 from "../../assets/photos/carousel/build-your-pc.jpg"
import photo2 from "../../assets/photos/carousel/free-home-delivery-982x500.jpg"
import photo3 from "../../assets/photos/carousel/computer-vector.png"
const Banner = () => {
  return (
  
    <div class="carousel w-full">
    <div id="slide1" class="carousel-item relative w-full">
      <img src={photo1} class="w-full"/> 
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" class="btn btn-circle">❮</a> 
        <a href="#slide2" class="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide2" class="carousel-item relative w-full">
      <img src={photo2} class="w-full"/> 
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" class="btn btn-circle">❮</a> 
        <a href="#slide3" class="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide3" class="carousel-item relative w-full">
      <img src={photo3} class="w-full"/> 
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" class="btn btn-circle">❮</a> 
        <a href="#slide1" class="btn btn-circle">❯</a>
      </div>
    </div> 
  </div>
   
  );
};

export default Banner;
