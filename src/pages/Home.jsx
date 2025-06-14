import ItemListContainer from "../components/ItemListContainer";
import { useTitle } from "../hooks/useTitle";
import { useGetFirestoreDocs } from "../hooks/useGetFirestoreDocs";

const Home = () => {
  const { loading, items: products } = useGetFirestoreDocs("products");
  useTitle("Home");
  return <ItemListContainer products={products} loading={loading} />;
};

export default Home;
