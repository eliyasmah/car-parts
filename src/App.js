import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer";
import NotFoundPage from "./Pages/Shared/NotFoundPage";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RequireAuth from "./Pages/Login/RequireAuth";
import AllProducts from "./Pages/Home/AllProducts";
import Parches from "./Pages/Parches/Parches";
import MyProfile from "./Pages/Dashboard/MyProfile";
import ManageOrders from "./Pages/Dashboard/ManageOrders";
import AddProduct from "./Pages/Dashboard/AddProduct";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import Blogs from "./Pages/Blogs/Blogs";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import AddReview from "./Pages/Home/AddReview";
import MyOrders from "./Pages/Dashboard/MyOrders";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/allProducts"
          element={<AllProducts></AllProducts>}
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/myPortfolio"
          element={<MyPortfolio></MyPortfolio>}
        ></Route>
        <Route
          path="/parches/:id"
          element={
            <RequireAuth>
              <Parches></Parches>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route
            path="manageOrders"
            element={<ManageOrders></ManageOrders>}
          ></Route>
          <Route path="addProduct" element={<AddProduct></AddProduct>}></Route>
          <Route path="makeAdmin" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route
            path="manageProducts"
            element={<ManageProducts></ManageProducts>}
          ></Route>
          <Route path="order" element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
