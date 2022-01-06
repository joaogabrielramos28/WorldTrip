import type { NextPage } from "next";
import Banner from "../components/banner";
import Divider from "../components/divider";
import Header from "../components/header";
import TravelTypes from "../components/travelTypes/index";
import { Heading } from "@chakra-ui/react";
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      <Divider />
      <Heading
        textAlign="center"
        fontSize="4xl"
        color="gray.700"
        lineHeight="56px"
        fontWeight="500"
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Heading>
    </>
  );
};

export default Home;
