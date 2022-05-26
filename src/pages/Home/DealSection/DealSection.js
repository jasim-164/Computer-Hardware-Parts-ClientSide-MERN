import React from 'react';
import { Link } from 'react-router-dom';
import "./DealSection.css"
const DealSection = () => {
    return (
        <div>
        <section class="deal" id="deal">

        <div class="content">
    
            <h3 class="title">deal of the day</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam possimus voluptates commodi laudantium! Doloribus sint voluptatibus quaerat sequi suscipit nulla?</p>
    
            <div class="count-down">
                <div class="box">
                    <h3 id="day">00</h3>
                    <span>day</span>
                </div>
                <div class="box">
                    <h3 id="hour">00</h3>
                    <span>hour</span>
                </div>
                <div class="box">
                    <h3 id="minute">00</h3>
                    <span>minute</span>
                </div>
                <div class="box">
                    <h3 id="second">00</h3>
                    <span>second</span>
                </div>
            </div>
    
            <Link to="#" className="btn btn-primary">check the deal</Link>
    
        </div>
    
    </section>
        </div>
    );
};

export default DealSection;