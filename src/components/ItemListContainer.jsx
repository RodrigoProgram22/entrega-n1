import { Flex } from "@chakra-ui/react";
const ItemListContainer = ({greeting})=>{
    return <Flex
    fontSize="2rem"
    width="100vw"
    marginTop="100px"
    alignItems="center"
    justifyContent="center"
    >
    {greeting}
    </Flex>
}
export default ItemListContainer;