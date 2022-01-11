import { Box, Flex, Image, Avatar, Text } from "@chakra-ui/react";
interface CardCityProps {
  country: string;
  capital: string;
  flag: string;
  banner: string;
}
const CardCity = ({ country, capital, flag, banner }: CardCityProps) => {
  return (
    <Flex flexDirection={"column"} maxWidth="300px">
      <Image
        src={`${banner}`}
        borderRadius={"4px 4px 0 6px"}
        alt={`${country} image`}
        height={"200px"}
      />
      <Flex
        align="center"
        justify="space-between"
        p={8}
        border={"1px solid rgba(255, 186, 8, 0.5)"}
      >
        <Flex flexDirection={"column"}>
          <Text color="gray.700">{capital}</Text>
          <Text color="gray.300">{country}</Text>
        </Flex>
        <Avatar src={`${flag}`} w={30} h={30} />
      </Flex>
    </Flex>
  );
};

export default CardCity;
