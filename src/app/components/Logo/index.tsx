import React from "react";
import CarLogoImg from "../../../assets/images/car-logo.png";
import CarLogoDarkImg from "../../../assets/images/car-logo-dark.png";
import styled from "styled-components";
import tw from "twin.macro";

interface ILogoProps {
    color?: "white" | "dark";
}

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
    cursor-default
  `}
  ${({color}: any) => (color === "dark" ? tw`text-white` : tw`text-black`)}
` as any;

const Image = styled.div`
  width: auto;

  ${tw`
    h-6
    md:h-9
  `}
  img {
    width: auto;
    height: 100%;
  }
`;


export function Logo(props: ILogoProps) {

    const {color} = props;
    const logoImage = color ? (color === "white" ? CarLogoImg : CarLogoDarkImg) : CarLogoImg;

    return (
        <LogoContainer>
            <Image>
                <img src={logoImage} alt=""/>
            </Image>
            <LogoText color={color || "white"}>Yourcar.</LogoText>
        </LogoContainer>
    )
}