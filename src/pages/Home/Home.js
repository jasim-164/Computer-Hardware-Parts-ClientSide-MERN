import React from 'react';
import Navbar from '../Shared/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <div class="form-control">
  <label class="label">
    <span class="label-text">Your Email</span>
  </label>
  <label class="input-group">
    <span>Email</span>
    <input type="text" placeholder="info@site.com" class="input input-bordered" />
  </label>
</div>
        </div>
    );
};

export default Home;