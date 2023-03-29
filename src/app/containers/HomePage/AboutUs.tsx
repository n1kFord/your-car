import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {SCREENS} from "../../components/responsive";

import JeepImg from "../../../assets/images/jeep.png";

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md:pr-0
    bg-white
  `};
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -60px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 23em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 25em;
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    height: 30em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    w-full
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `};
`;

const Title = styled.h2`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `};
`;

const InfoText = styled.p`
  ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
  `}
`;

export function AboutUs() {
    return (
        <AboutUsContainer>
            <CarContainer>
                <img src={JeepImg} alt=""/>
            </CarContainer>
            <InfoContainer>
                <Title>Fell The Best Experience With Our Rental Deals</Title>
                <InfoText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga?
                </InfoText>
            </InfoContainer>
        </AboutUsContainer>
    )
}