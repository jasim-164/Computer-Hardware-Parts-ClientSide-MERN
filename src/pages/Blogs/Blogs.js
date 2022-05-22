import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-center text-4xl ">Blogs</h1>
      <div class="divider"></div>
      <div class="flex flex-col w-full border-opacity-50">
        <div class="grid  card  rounded-box place-items-center bg-slate-600 p-5">
          <h1 className="text-white text-2xl">
            How will you improve the performance of a React Application?
          </h1>
          <ul className="text-[#F9D342] text-lg  mt-5">
            <li>1.Lazy loading images in React</li>
            <li>
              2. Memoizing React components to prevent unnecessary re-renders
            </li>
            <li>3. Code-splitting in React using dynamic import()</li>
            <li>4. Keeping component state local where necessary</li>
            <li>5. Windowing or list virtualization in React</li>
          </ul>
        </div>
        <div class="divider"></div>
        <div class="grid  card bg-slate-600 rounded-box place-items-center p-5">
          <h1 className="text-white text-2xl">
            What are the different ways to manage a state in a React
            application?
          </h1>

          <ul className="text-[#F9D342] text-lg  mt-5">
            <li>1. Local state</li>
            <li>2. Global state</li>
            <li>3. Server state</li>
            <li>4. URL state</li>
          </ul>
        </div>
        <div class="divider"></div>
        <div class="grid  card bg-slate-600 rounded-box place-items-center p-5">
          <h1 className="text-white text-2xl">
            How does prototypical inheritance work?
          </h1>
          <p className="text-[#F9D342] text-lg  mt-5">
            prototypical inheritance refers to the ability to access object
            properties from another object. We use a JavaScript prototype to add
            new properties and methods to an existing object constructor. We can
            then essentially tell our JS code to inherit properties from a
            prototype. Prototypical inheritance allows us to reuse the
            properties or methods from one JavaScript object to another through
            a reference pointer function. All JavaScript objects inherit
            properties and methods from a prototype: Date objects inherit from
            Date.prototype. Array objects inherit from Array.prototype. Player
            objects inherit from Player.prototype. The Object.prototype is on
            top of the prototype inheritance chain. ​ Date objects, Array
            objects, and Player objects all inherit from Object.prototype.
          </p>
        </div>
        <div class="divider"></div>
        <div class="grid  card bg-slate-600 rounded-box place-items-center p-5">
          <h1 className="text-white text-2xl">
            Why you do not set the state directly in React. For example, if you
            have `const [products, setProducts] = useState([])`. Why you do not
            set `products = [...]` instead, you use the `setProducts`
          </h1>
          <p className="text-[#F9D342] text-lg text-center mt-5">
            useState accepts an initial state and returns two values: The
            current state. A function that updates the state. To update our
            state, we use our state updater function. We should never directly
            update state. Ex: products = [.....] is not allowed. We need
            setProducts to update the state
          </p>
        </div>
        <div class="divider"></div>
        <div class="grid card bg-slate-600 rounded-box place-items-center p-5">
          <h1 className="text-white text-2xl ">
            You have an array of products. Each object has a name, price,
            description, etc. How will you implement a search to find products
            by name?{" "}
          </h1>
          <p className="text-[#F9D342] text-lg text-center  mt-5">
            first I will use map and pass the each product as a props in Product
            page. Like products.map , Then I will filter the product by name. if
            name===userInput then I will show the all product.
          </p>
        </div>
        <div class="divider"></div>
        <div class="grid card bg-slate-600 rounded-box place-items-center p-5">
          <h1 className="text-white text-2xl">
            What is a unit test? Why should write unit tests?
          </h1>
          <p className="text-[#F9D342] text-lg text-center  mt-5">
            The main objective of unit testing is to isolate written code to
            test and determine if it works as intended. Unit testing is an
            important step in the development process, because if done
            correctly, it can help detect early flaws in code which may be more
            difficult to find in later testing stages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
