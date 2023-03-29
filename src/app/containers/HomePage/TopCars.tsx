import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";

import { cars } from "../../data/cars";

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-20
  `};
`;

const Title = styled.h2`
  ${tw`
    text-2xl
    lg:text-4xl
    text-black
    font-extrabold
  `};
`;

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `}
  .BrainhubCarousel {
    padding: 0 10px;
  }

  .BrainhubCarousel__arrows {
    background-color: rgb(239 68 68 / 0.9);
    transition: 0.2s ease-in-out;
  }

  .BrainhubCarousel__arrows:disabled {
    background-color: rgb(239 68 68 / 0.3);
  }

  .BrainhubCarousel__arrows:hover {
    background-color: rgb(239 68 68 / 1);
  }
`;

export function TopCars() {
  const [current, setCurrent] = React.useState(0);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const numberOfDots = cars.length;
  const numberOfSlides = isMobile ? 1 : 3;

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      <CarsContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          plugins={[
            "clickToChange",
            "arrows",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: numberOfSlides,
              },
            },
          ]}
        >
          {cars}
        </Carousel>
        <Dots value={current} onChange={setCurrent} number={numberOfDots} />
      </CarsContainer>
    </TopCarsContainer>
  );
}
