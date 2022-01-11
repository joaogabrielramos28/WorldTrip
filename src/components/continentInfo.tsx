import { Flex, Heading, Text } from "@chakra-ui/react";

interface ContinentInfoProps {
  number: number;
  title: string;
}

const ContinentInfo = ({ number, title }: ContinentInfoProps) => {
  return (
    <Flex align="center" flexDirection="column" mx={"20px"}>
      <Heading color={"yellow.700"} fontSize={["3xl", "5xl"]}>
        {number}
      </Heading>
      <Text color={"gray.700"} fontSize={["lg", "2xl"]}>
        {title}
      </Text>
    </Flex>
  );
};

export default ContinentInfo;
