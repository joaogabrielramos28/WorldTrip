import { ReactElement } from "react";
import { Box, Flex, Icon, Image, useMediaQuery } from "@chakra-ui/react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useRouter } from "next/router";
import Link from "next/link";
const Header = (): ReactElement => {
  const [isMobile] = useMediaQuery("(max-width: 400px)");
  const { pathname } = useRouter();

  if (pathname === "/") {
    return (
      <Box w="100%" justify="center" align="center" p="8" h="100px">
        <Image src="/Logo.png" alt="Logotipo WorldTrip" />
      </Box>
    );
  }

  return (
    <Box w="100%" justify="center" align="center" p="8" h="100px">
      <Flex flexDirection="row" justify="space-between" align="center">
        <div></div>
        <Link href="/" passHref>
          <Icon as={MdOutlineArrowBackIos} w={25} h={25} cursor={"pointer"} />
        </Link>
        <Image src="/Logo.png" alt="Logotipo WorldTrip" />
        <p></p>
        <div></div>
      </Flex>
    </Box>
  );
};

export default Header;
