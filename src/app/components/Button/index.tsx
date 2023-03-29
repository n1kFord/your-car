import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
    theme?: "filled" | "outlined";
    text: string;
    className?: string;
}

const BaseButton = styled.button`
  ${tw`
    m-1
    pl-5
    pr-5
    pt-3
    pb-3
    outline-none
    rounded-md
    text-white
    text-xs
    font-semibold
    border-transparent
    border-2
    border-solid
    transition-all
    duration-200
    ease-in-out
  `}
`;

const OutlinedButton = styled(BaseButton)`
  ${tw`
  border-red-500
    text-red-500
    bg-transparent
    hover:bg-red-500
    hover:text-white
    hover:border-transparent
  `}
`;

const FilledButton = styled(BaseButton)`
  ${tw`
    bg-red-500
    hover:opacity-90
  `}
`;

export function Button(props: IButtonProps) {
    const {theme, text, className} = props;

    if (theme === "filled") {
        return <FilledButton className={className}>{text}</FilledButton>
    } else {
        return <OutlinedButton className={className}>{text}</OutlinedButton>
    }

}