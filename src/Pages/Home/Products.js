import useData from "../../hooks/useData";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useData();
  return (
    <div className="my-12">
      <h1 className="text-center text-primary text-5xl font-medium mb-8">
        tools
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {products.slice(0, 6).map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
