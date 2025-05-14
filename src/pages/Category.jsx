import { useParams } from "react-router";
import ItemListContainer from "../components/ItemListContainer";
import { useEffect, useState } from "react";
import { getProductsByCategory } from "../services/products.service";

const Category = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProductsByCategory(id)
      .then((res) => {
        setProducts(res.data.products);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return <ItemListContainer products={products} loading={loading} />;
};

export default Category;
