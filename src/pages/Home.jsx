import { useEffect, useState } from "react";
import { getAllProducts } from "../services/products.service";
import ItemListContainer from "../components/ItemListContainer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProducts(res.data.products);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <ItemListContainer products={products} loading={loading} />;
};

export default Home;
