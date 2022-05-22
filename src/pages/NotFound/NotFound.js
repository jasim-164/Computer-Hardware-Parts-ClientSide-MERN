import React from 'react';
import img404 from "../../assets/photos/image404.png"
const NotFound = () => {
    return (
        <div className=" flex justify-center items-center m-10">
            <img src={img404} alt="Not Found page"/>
        </div>
    );
};

export default NotFound;
