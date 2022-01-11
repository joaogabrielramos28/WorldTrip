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

import { Continents } from "../services/api";
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
          {Continents.map((continent) => (
            <SwiperSlide key={continent.name}>
              <Link href={`/continent/${continent.name}`} passHref>
                <Flex
                  flexDirection="column"
                  w="100%"
                  h="100%"
                  objectFit={"cover"}
                  align="center"
                  justify="center"
                  bgImage={`${continent.carousel}`}
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
                    {continent.translatedName}
                  </Heading>
                  <Text
                    color="gray.100"
                    fontSize="2xl"
                    fontWeight="bold"
                    lineHeight="36px"
                  >
                    {continent.bannerTitle}
                  </Text>
                </Flex>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </>
  );
};

export default Carousel;
