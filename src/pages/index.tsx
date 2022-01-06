import type { NextPage } from "next";
import Banner from "../components/banner";
import Header from "../components/header";
import TravelTypes from "../components/travelTypes/index";
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
    </>
  );
};

export default Home;
