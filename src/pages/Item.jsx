import { useParams } from "react-router";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { useEffect, useState } from "react";
import { getProductById } from "../services/products.service";
import { Flex, Spinner } from "@chakra-ui/react";
const Item = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then((res) => setProduct(res.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [id]);

  return loading ? (
    <Flex alignItems="center" justifyContent="center" marginTop={"100px"}>
      <Spinner color="red.500" size="xl" />
    </Flex>
  ) : (
    <ItemDetailContainer product={product} />
  );
};

export default Item;
