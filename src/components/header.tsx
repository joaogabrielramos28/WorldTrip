import { ReactElement } from "react";
import { Box, Image } from "@chakra-ui/react";
const header = (): ReactElement => {
  return (
    <Box w="100%" justify="center" align="center" p="8" h="100px">
      <Image src="Logo.png" alt="Logotipo WorldTrip" />
    </Box>
  );
};

export default header;
