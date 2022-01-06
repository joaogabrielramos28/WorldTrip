import { Flex, Image, Heading } from "@chakra-ui/react";
import { ReactElement } from "react";

interface TypesTravelProps {
  img: string;
  text: string;
}

const TypesTravel = ({ img, text }: TypesTravelProps): ReactElement => {
  return (
    <Flex flexDirection="column" align="center">
      <Image w="85px" src={img} alt={text} />
      <Heading my="20px" fontSize="2xl" lineHeight="36px" color="gray.700">
        {text}
      </Heading>
    </Flex>
  );
};

export default TypesTravel;
