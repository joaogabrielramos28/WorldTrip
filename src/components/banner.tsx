import { ReactElement } from "react";
import { Box, Flex, Text, Image, useMediaQuery } from "@chakra-ui/react";
const Banner = (): ReactElement => {
  const [isMobile] = useMediaQuery("(max-width: 400px)");
  return (
    <Flex
      bgImage={"Background.png"}
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      h="400px"
      justify="space-between"
      align="center"
    >
      <Flex px={["3", "36"]} flexDirection={"column"}>
        <Text fontSize={["3xl", "6xl"]} color="gray.50">
          5 Continentes, <br />
          infinitas possibilidades.
        </Text>
        <Text fontSize={["lg", "xl"]} color="gray.100" maxWidth="550px">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
        </Text>
      </Flex>
      {!isMobile && (
        <Image
          transform={"rotate(3deg)translateY(78px)"}
          w="430px"
          src="Airplane.png"
          alt="Avião voando sob as nuvens"
        />
      )}
      <div></div>
    </Flex>
  );
};

export default Banner;
