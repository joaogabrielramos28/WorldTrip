import {
  Flex,
  Heading,
  Text,
  Tooltip,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";
interface ContinentInfoProps {
  number: number;
  title: string;
  tooltip?: boolean;
}

const ContinentInfo = ({
  number,
  title,
  tooltip = false,
}: ContinentInfoProps) => {
  const [isMobile] = useMediaQuery("(max-width: 400px)");

  return (
    <Flex align="center" flexDirection="column" mx={"20px"}>
      <Heading color={"yellow.700"} fontSize={["3xl", "5xl"]}>
        {number}
      </Heading>
      <Text color={"gray.700"} fontSize={["lg", "2xl"]}>
        {title}
        {tooltip && !isMobile && (
          <Tooltip
            hasArrow
            label="Lugares mais visitados por turistas"
            bg="gray.700"
          >
            <Icon w="5" ml="3px" mb="3px" />
          </Tooltip>
        )}
      </Text>
    </Flex>
  );
};

export default ContinentInfo;
