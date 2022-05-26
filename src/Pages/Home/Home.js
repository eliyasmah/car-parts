import React from "react";
import Banner from "./Banner";
import BestCustomers from "./BestCustomers";
import BusinessSummary from "./BusinessSummary";
import Partners from "./Partners";
import Products from "./Products";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <BestCustomers></BestCustomers>
      <Partners></Partners>
    </div>
  );
};

export default Home;
