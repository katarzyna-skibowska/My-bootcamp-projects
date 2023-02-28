import Box from "../../Components/Box/Box";
import Button from "../ProductCard/Button/Button";
import ContainerBlock from "../../Components/ContainerBlock/ContainerBlock";
import ContainerFlex from "../../Components/ContainerFlex/ContainerFlex";
import Picture from "../ProductCard/Picture/Picture";
import Description from "./ProductInfo/Description/Description";
import Price from "./ProductInfo/Price/Price";

function ProductCard() {
  return (
    <Box>
      <ContainerFlex>
        <Picture />
      </ContainerFlex>

      <ContainerBlock>
        <Description />
        <ContainerFlex>
          <Price />
        </ContainerFlex>
        <Button name="Add to cart" />
      </ContainerBlock>
    </Box>
  );
}

export default ProductCard;
