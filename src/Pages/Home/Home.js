import React from "react";
import Banner from "./Banner";
import BestCustomers from "./BestCustomers";
import BusinessSummary from "./BusinessSummary";
import Products from "./Products";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>\<BestCustomers></BestCustomers>
    </div>
  );
};

export default Home;
