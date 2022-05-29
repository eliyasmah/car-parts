import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [user] = useAuthState(auth);

  const [orders, setOrders] = useState([]);

  //let { name,displayName,email,order,location} = orders;
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
  console.log(orders);
  return (
    <div class="overflow-x-auto">
      <h1 className="text-3xl text-center my-8 font-bold text-primary">
        Orders:{orders.length}
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
          {Array.isArray(orders) &&
            orders.map((order) => {
              <tr>
                <th>1</th>
                <td>{order.name}</td>
                <td>{order.displayName}</td>
                <td>{order.email}</td>
                <td>{order.order}</td>
                <td>{order.location}</td>
              </tr>;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
