import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./pages/Shared/Navbar";
import Loading from "./pages/Shared/Loading";
import Login from "./pages/Login/Login";
import Blogs from "./pages/Blogs/Blogs";
import HardwareComponents from "./pages/HardwareComponents/HardwareComponents";
import NotFound from "./pages/NotFound/NotFound";
import MyPortfolio from "./pages/MyPortfolio/MyPortfolio";
import Footer from "./pages/Shared/Footer";
import Dashboard from "./pages/Dashboard/Dashboard";
import MakeAdmin from "./pages/Dashboard/MakeAdmin";
import ManageOrders from "./pages/Dashboard/ManageOrders";
import ManageProducts from "./pages/Dashboard/ManageProducts";
import AddProduct from "./pages/Dashboard/AddProduct";
import Payment from "./pages/Dashboard/Payment";
import MyReview from "./pages/Dashboard/MyReview";
import MyProfile from "./pages/Dashboard/MyProfile";
import MyOrders from "./pages/Dashboard/MyOrders";
import SignUp from "./pages/Login/SignUp";
import RequireAuth from "./pages/Login/RequireAuth";
import OrderProduct from "./pages/HardwareComponents/OrderProduct";
import AllUser from "./pages/Dashboard/AllUser";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/navbar" element={<Navbar />} />
        <Route
          path="/hardwarecomponents"
          element={<HardwareComponents />}
        ></Route>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/orderProduct/:id" element={<RequireAuth><OrderProduct/></RequireAuth>}></Route>

        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyProfile></MyProfile>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="users" element={<AllUser></AllUser>}></Route>
          <Route path="addProduct" element={<AddProduct></AddProduct>}></Route>
          <Route
            path="manageProducts"
            element={<ManageProducts></ManageProducts>}
          ></Route>
          <Route
          path="manageOrders"
          element={<ManageOrders></ManageOrders>}
        ></Route>
        <Route path="makeAdmin" element={<MakeAdmin></MakeAdmin>}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/myportfolio" element={<MyPortfolio />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
