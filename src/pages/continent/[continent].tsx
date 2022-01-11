import { Box, Heading, Flex, Text, Grid, SimpleGrid } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import CardCity from "../../components/cardCity";
import ContinentInfo from "../../components/continentInfo";
import Header from "../../components/header";

interface ContinentProps {
  continent?: string;
}

const Continent = ({ continent }: ContinentProps) => {
  const formattedContinent = continent?.replace("-", " ");
  return (
    <>
      <Header />
      <Box w={"100%"}>
        <Flex
          w="100%"
          objectFit="cover"
          height="700px"
          backgroundImage="/europe.png"
          backgroundSize="cover"
          bgRepeat="no-repeat"
          p={20}
          align={"flex-end"}
        >
          <Heading color={"white"} fontSize="6xl" textTransform={"capitalize"}>
            {formattedContinent}
          </Heading>
        </Flex>

        <Grid w="100%" p={"28"} templateColumns={"1.2fr 1fr"} gap={20}>
          <Text
            w="1fr"
            fontSize="xl"
            textAlign="justify"
            lineHeight={"36px"}
            color={"gray.700"}
          >
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
          <Flex flex="1" justify="center">
            <ContinentInfo number={50} title={"países"} />
            <ContinentInfo number={60} title={"línguas"} />
            <ContinentInfo number={27} title={"cidade +100"} />
          </Flex>
        </Grid>

        <Box p={24} w={"100%"}>
          <Text color="gray.700" fontSize={"5xl"} lineHeight="54px">
            Cidades +100
          </Text>
          <SimpleGrid my={20} minChildWidth="260px" columns={6} spacing={10}>
            <CardCity
              country={"Reino Unido"}
              capital={"Londres"}
              flag={"england.png"}
              banner={"london.png"}
            />
            <CardCity
              country={"França"}
              capital={"Paris"}
              flag={"europe/france.png"}
              banner={"europe/paris.png"}
            />
            <CardCity
              country={"Itália"}
              capital={"Roma"}
              flag={"europe/italy.png"}
              banner={"europe/roma.png"}
            />
            <CardCity
              country={"República Tcheca"}
              capital={"Praga"}
              flag={"europe/theca.png"}
              banner={"europe/praga.png"}
            />
            <CardCity
              country={"Holanda"}
              capital={"Amsterdã"}
              flag={"europe/nederland.png"}
              banner={"europe/amsterdam.png"}
            />
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default Continent;

export const getStaticPaths: GetStaticPaths = async () => {
  const arrayContinent = [
    "europa",
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

  return {
    props: {
      continent,
    },
    revalidate: 60 * 30, // 30 min
  };
};
