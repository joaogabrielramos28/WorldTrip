import { Box, Heading, Flex, Text, Grid, SimpleGrid } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Continents } from "../../services/api.js";
import CardCity from "../../components/cardCity";
import ContinentInfo from "../../components/continentInfo";
import Header from "../../components/header";

interface ContinentProps {
  name: string;
  translatedName: string;
  banner: string;
  description: string;
  countryCount: number;
  languages: number;
  cities100: number;
  cities: {
    banner: string;
    capital: string;
    country: string;
    image: string;
  }[];
}

const Continent = ({ exactContinent }: ContinentProps) => {
  const {
    name,
    translatedName,
    banner,
    description,
    countryCount,
    languages,
    cities100,
    cities,
  }: ContinentProps = exactContinent[0];

  return (
    <>
      <Header />
      <Box w={"100%"}>
        <Flex
          w="100%"
          objectFit="cover"
          height={["450px", "700px"]}
          backgroundImage={banner}
          backgroundSize="cover"
          bgRepeat="no-repeat"
          p={20}
          align={"flex-end"}
        >
          <Heading color={"white"} fontSize="6xl" textTransform={"capitalize"}>
            {translatedName}
          </Heading>
        </Flex>

        <Grid
          w="100%"
          p={["2", "28"]}
          templateColumns={["1fr", "1.2fr 1fr"]}
          gap={10}
        >
          <Text
            w="1fr"
            fontSize={["sm", "xl"]}
            textAlign="justify"
            lineHeight={"36px"}
            color={"gray.700"}
          >
            {description}
          </Text>
          <Flex flex="1" justify="center">
            <ContinentInfo number={countryCount} title={"países"} />
            <ContinentInfo number={languages} title={"línguas"} />
            <ContinentInfo number={cities100} title={"cidade +100"} />
          </Flex>
        </Grid>

        <Box p={[10, 24]} w={"100%"} my={["10", 0]} mx="auto">
          <Text color="gray.700" fontSize={["2xl", "5xl"]} lineHeight="54px">
            Cidades +100
          </Text>
          <SimpleGrid
            my={[10, 20]}
            minChildWidth={"260px"}
            maxColumns={[1, 6]}
            spacing={10}
          >
            {cities.map((city) => (
              <CardCity
                key={city.capital}
                country={city.country}
                capital={city.capital}
                flag={`${city.image}`}
                banner={`${city.banner}`}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default Continent;

export const getStaticPaths: GetStaticPaths = async () => {
  const arrayContinent = [
    "europe",
    "south-america",
    "asia",
    "north-america",
    "africa",
  ];

  const paths = arrayContinent.map((continent) => {
    return {
      params: {
        continent: continent,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const continent = context.params?.continent;

  const exactContinent = Continents.filter((continentData) => {
    if (continentData.name === continent) {
      return continentData;
    }
  });

  return {
    props: {
      exactContinent,
    },
    revalidate: 60 * 30, // 30 min
  };
};
