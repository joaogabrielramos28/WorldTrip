import { Center, Box } from "@chakra-ui/react";
import { ReactElement } from "react";

const Divider = (): ReactElement => {
  return (
    <Center>
      <Box w="120px" height="100px" borderColor="grey.700" borderTop="2px" />
    </Center>
  );
};

export default Divider;
