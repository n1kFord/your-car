import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../Logo";

const FooterContainer = styled.div`
  background-color: #1d2124;
  ${tw`
    flex
    min-w-full
    pt-4
    md:pt-12
    pb-10
    pl-3
    pr-3
    items-center
    justify-center
  `};
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    w-full
    h-full
    max-w-screen-2xl
    flex-wrap
  `};
`;

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
  `};
`;

const AboutText = styled.p`
  ${tw`
    text-white
    text-sm
    font-normal
    max-w-md
    leading-5
    mt-2
  `};
`;

const SectionContainer = styled.div`
  ${tw`
    flex
    flex-col
    ml-20
    mt-20
    md:mt-0
    md:w-auto
  `};
`;

const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `};
`;

const ListItem = styled.li`
  ${tw`
    mb-2
  `}

  & > a {
    ${tw`
      text-sm
      text-gray-300
      cursor-pointer
      transition
      duration-200
      ease-in-out
      hover:opacity-75
    `}
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-2xl
    font-bold
    text-white
    mb-3
  `};
`;

const HorizontalContainer = styled.div`
  ${tw`
    flex
  `};
`;

const RedIcon = styled.span`
  ${tw`
    w-5
    h-5
    rounded-full
    flex
    items-center
    justify-center
    text-red-500
    text-base
    mr-2
  `};
`;

const SmallText = styled.h6`
  ${tw`
    text-sm
    text-white
  `};
`;

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="dark" />
          <AboutText>
            Yourcar is a Car renting and selling company located in many
            countries across the world which has high quality cars and top rated
            service.
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">About Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Services</a>
            </ListItem>
            <ListItem>
              <a href="#">Models</a>
            </ListItem>
            <ListItem>
              <a href="#">Blog</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="#">Contact Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Support</a>
            </ListItem>
            <ListItem>
              <a href="#">Privacy</a>
            </ListItem>
            <ListItem>
              <a href="#">Terms & Conditions</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+91 555-234-1469</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Mail</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>yourcar@gmail.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
    </FooterContainer>
  );
}
