import { ReactElement } from "react";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
// Import Swiper styles
// Navigation module
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const Carousel = (): ReactElement => {
  return (
    <>
      <Flex w="100%" mx="auto" h="850px" px="36" py="20">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link href="/continent/europa" passHref>
              <Flex
                flexDirection="column"
                w="100%"
                h="100%"
                objectFit={"cover"}
                align="center"
                justify="center"
                bgImage="europe.png"
                bgRepeat="no-repeat"
                bgSize="cover"
                cursor="pointer"
              >
                <Heading
                  color="gray.50"
                  fontSize="6xl"
                  fontWeight="bold"
                  lineHeight="72px"
                >
                  Europa
                </Heading>
                <Text
                  color="gray.100"
                  fontSize="2xl"
                  fontWeight="bold"
                  lineHeight="36px"
                >
                  O continente mais antigo.
                </Text>
              </Flex>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/continent/south-america" passHref>
              <Flex
                flexDirection="column"
                w="100%"
                h="100%"
                bgPosition="100% 30%"
                objectFit={"cover"}
                align="center"
                justify="center"
                bgImage="southAmerica.jpg"
                bgRepeat="no-repeat"
                bgSize="cover"
                cursor="pointer"
              >
                <Heading
                  color="gray.50"
                  fontSize="6xl"
                  fontWeight="bold"
                  lineHeight="72px"
                >
                  América do sul
                </Heading>
                <Text
                  color="gray.100"
                  fontSize="2xl"
                  fontWeight="bold"
                  lineHeight="36px"
                >
                  Continente com clima tropical e Grande biodiversidade.
                </Text>
              </Flex>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/continent/north-america" passHref>
              <Flex
                flexDirection="column"
                w="100%"
                h="100%"
                bgPosition="100% 30%"
                objectFit={"cover"}
                align="center"
                justify="center"
                bgImage="northAmerica.jpg"
                bgRepeat="no-repeat"
                bgSize="cover"
                cursor="pointer"
              >
                <Heading
                  color="gray.50"
                  fontSize="6xl"
                  fontWeight="bold"
                  lineHeight="72px"
                >
                  América do norte
                </Heading>
                <Text
                  color="gray.100"
                  fontSize="2xl"
                  fontWeight="bold"
                  lineHeight="36px"
                >
                  O segundo maior continente do mundo.
                </Text>
              </Flex>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/continent/africa" passHref>
              <Flex
                flexDirection="column"
                w="100%"
                h="100%"
                bgPosition="100% 30%"
                objectFit={"cover"}
                align="center"
                justify="center"
                bgImage="africa.jpg"
                bgRepeat="no-repeat"
                backgroundPosition={"bottom center"}
                bgSize="cover"
                cursor="pointer"
              >
                <Heading
                  color="gray.50"
                  fontSize="6xl"
                  fontWeight="bold"
                  lineHeight="72px"
                >
                  África
                </Heading>
                <Text
                  color="gray.100"
                  fontSize="2xl"
                  fontWeight="bold"
                  lineHeight="36px"
                >
                  Onde se localiza o deserto de Saara.
                </Text>
              </Flex>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/continent/asia" passHref>
              <Flex
                flexDirection="column"
                w="100%"
                h="100%"
                bgPosition="100% 30%"
                objectFit={"cover"}
                align="center"
                justify="center"
                bgImage="asia.jpg"
                bgRepeat="no-repeat"
                bgSize="cover"
                cursor="pointer"
              >
                <Heading
                  color="gray.50"
                  fontSize="6xl"
                  fontWeight="bold"
                  lineHeight="72px"
                >
                  Ásia
                </Heading>
                <Text
                  color="gray.100"
                  fontSize="2xl"
                  fontWeight="bold"
                  lineHeight="36px"
                >
                  O continente mais populoso.
                </Text>
              </Flex>
            </Link>
          </SwiperSlide>
        </Swiper>
      </Flex>
    </>
  );
};

export default Carousel;
