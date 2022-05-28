import { useEffect, useState } from "react";

const useData = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://arcane-gorge-79649.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};

export default useData;
