import { Flex, Image, Heading, useMediaQuery } from "@chakra-ui/react";
import { ReactElement } from "react";

interface TypesTravelProps {
  img: string;
  text: string;
}

const TypesTravel = ({ img, text }: TypesTravelProps): ReactElement => {
  const [isMobile] = useMediaQuery("(max-width: 420px)");
  return (
    <Flex
      flexDirection={["row", "column"]}
      align="center"
      justify="center"
      flexWrap={"wrap"}
    >
      {!isMobile ? (
        <Image w="85px" src={img} alt={text} />
      ) : (
        <Heading fontSize="4xl" color="yellow.700" mr={2}>
          •
        </Heading>
      )}
      <Heading
        my="20px"
        fontSize={["md", "2xl"]}
        lineHeight="36px"
        color="gray.700"
      >
        {text}
      </Heading>
    </Flex>
  );
};

export default TypesTravel;
