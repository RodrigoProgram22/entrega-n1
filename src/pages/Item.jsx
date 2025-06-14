import { useParams } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { Flex, Spinner } from "@chakra-ui/react";
import { useTitle } from "../hooks/useTitle";
import { useGetItemFirestore } from "../hooks/useGetItemFirestore";

const Item = () => {
  const { id } = useParams();
  useTitle("Item Page");

  const { loading, item: product } = useGetItemFirestore("products", id);

  return loading ? (
    <Flex alignItems="center" justifyContent="center" marginTop={"100px"}>
      <Spinner color="red.500" size="xl" />
    </Flex>
  ) : (
    <ItemDetailContainer product={product} />
  );
};
export default Item;
