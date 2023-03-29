import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { NavBar } from "../../components/NavBar";
import { TopSection } from "./TopSection";
import { BookCard } from "../../components/BookCard";
import { Marginer } from "../../components/Marginer";
import { BookingSteps } from "./BookingSteps";
import { AboutUs } from "./AboutUs";
import { TopCars } from "./TopCars";
import { Footer } from "../../components/Footer/Footer";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

export function HomePage() {
  return (
    <PageContainer>
      <NavBar />
      <TopSection />
      <Marginer margin="3em" direction="vertical" />
      <BookCard />
      <Marginer margin="10em" direction="vertical" />
      <BookingSteps />
      <Marginer margin="8em" direction="vertical" />
      <AboutUs />
      <Marginer margin="8em" direction="vertical" />
      <TopCars />
      <Footer />
    </PageContainer>
  );
}
