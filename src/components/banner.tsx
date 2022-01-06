import { ReactElement } from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
const Banner = (): ReactElement => {
  return (
    <Flex
      bgImage={"Background.png"}
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      h="360"
      justify="space-between"
      align="center"
    >
      <Flex px="36" flexDirection={"column"}>
        <Text fontSize="6xl" color="gray.50">
          5 Continentes,
          <br /> infinitas possibilidades.
        </Text>
        <Text fontSize="xl" color="gray.100" maxWidth="550px">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
        </Text>
      </Flex>
      <Image
        transform={"rotate(3deg)translateY(48px)"}
        w="430px"
        src="Airplane.png"
        alt="Avião voando sob as nuvens"
      />
      <div></div>
    </Flex>
  );
};

export default Banner;
