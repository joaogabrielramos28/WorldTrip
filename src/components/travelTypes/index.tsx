import { ReactElement } from "react";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import TypesTravel from "./typesTravel";
const TravelTypes = (): ReactElement => {
  return (
    <SimpleGrid columns={5} mx="auto" p="32" w="100%" spacing="150px">
      <TypesTravel img="cocktail 1.png" text="vida noturna" />
      <TypesTravel img="surf 1.png" text="praia" />
      <TypesTravel img="building 1.png" text="moderno" />
      <TypesTravel img="museum 1.png" text="clássico" />
      <TypesTravel img="earth 1.png" text="e mais..." />
    </SimpleGrid>
  );
};

export default TravelTypes;
