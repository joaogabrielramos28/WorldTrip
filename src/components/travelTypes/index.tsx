import { ReactElement } from "react";
import { Flex, GridItem, SimpleGrid } from "@chakra-ui/react";
import TypesTravel from "./typesTravel";
const TravelTypes = (): ReactElement => {
  return (
    <SimpleGrid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      columns={3}
      mx="auto"
      mt={["10", "32"]}
      maxW="1160px"
      flexWrap="wrap"
      w="100%"
      gap={[1]}
    >
      <GridItem>
        <TypesTravel img="cocktail 1.png" text="vida noturna" />
      </GridItem>
      <GridItem>
        <TypesTravel img="surf 1.png" text="praia" />
      </GridItem>
      <GridItem>
        <TypesTravel img="building 1.png" text="moderno" />
      </GridItem>
      <GridItem>
        <TypesTravel img="museum 1.png" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <TypesTravel img="earth 1.png" text="e mais..." />
      </GridItem>
    </SimpleGrid>
  );
};

export default TravelTypes;
