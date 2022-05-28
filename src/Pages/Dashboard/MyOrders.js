import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [user] = useAuthState(auth);

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `https://arcane-gorge-79649.herokuapp.com/orders?email=${email}`;
      const { data } = await axios.get(url);
      console.log(data);
      setOrders(data);
    };
    getOrders();
  }, [user]);

  return (
    <div class="overflow-x-auto">
      <h1 className="text-2xl text-center my-8 font-bold text-primary">
        orders:{orders.length}
      </h1>
      <table class="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Clint Name</th>
            <th>Email Address</th>
            <th>Order Quantity</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>{orders.name}</td>
            <td>{orders.email}</td>
            <td>Littel, Schaden and Vandervort</td>
            <td>Canada</td>
            <td>12/16/2020</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
