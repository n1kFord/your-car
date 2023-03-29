import React from "react";
import styled, {css} from "styled-components";
import tw from "twin.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";
import {Marginer} from "../Marginer";
import {Button} from "../Button";

import Calendar from "react-calendar";

import 'react-calendar/dist/Calendar.css';
import {SCREENS} from "../responsive";

const BookCardContainer = styled.div`
  ${tw`
    z-10
    flex
    justify-center
    items-center
    rounded-md
    bg-transparent
    pt-1
    pb-1
    pr-2
    pl-2
    md:pt-2
    md:pb-2
    md:pl-9
    md:pr-9
  `}
`;

const ItemContainer = styled.div`
  ${tw`
    flex
    relative
    items-center
  `}
`;

const Icon = styled.span`
  ${tw`
    text-red-500
    fill-current
    text-xs
    md:text-base
    mr-1
    md:mr-3
  `}
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-500
    fill-current
    text-xs
    md:text-base
    ml-1
  `}
`;

const Name = styled.span`
  ${tw`
    text-gray-600
    text-xs
    md:text-sm
    cursor-pointer
    hover:opacity-80
    transition
    duration-200
    ease-in-out
    select-none
  `}
`;

const LineSeparator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-300
    mr-2
    ml-2
    md:mr-5
    md:ml-5
  `};
`;

const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 2em;
  left: 0;

  .react-calendar__tile {
    transition: .2s linear;
  }

  .react-calendar__tile--active {
    background-color: #006edc;
    opacity: 1;
  }

  ${({offset}: any) =>
          offset &&
          css`
            left: -6em;
          `};

  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
  }
` as any;

export function BookCard() {

    const [startDate, setStartDate] = React.useState<Date>(new Date());
    const [isStartCalendarOpen, setStartCalendarOpen] = React.useState<boolean>(false);

    const [returnDate, setReturnDate] = React.useState<Date>(new Date());
    const [isReturnCalendarOpen, setReturnCalendarOpen] = React.useState<boolean>(false);

    const toggleStartDateCalendar = (): void => {
        setStartCalendarOpen(!isStartCalendarOpen);
        setReturnCalendarOpen(false);
    }

    const toggleReturnDateCalendar = (): void => {
        setReturnCalendarOpen(!isReturnCalendarOpen);
        setStartCalendarOpen(false);
    }

    return (
        <BookCardContainer>
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt}/>
                </Icon>
                <Name onClick={toggleStartDateCalendar}>Pick Up Date</Name>
                <SmallIcon>
                    <FontAwesomeIcon icon={isStartCalendarOpen ? faCaretUp : faCaretDown}/>
                </SmallIcon>
                {isStartCalendarOpen && (
                    <DateCalendar value={startDate} onChange={setStartDate} locale="en-GB"/>
                )}
            </ItemContainer>
            <LineSeparator/>
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt}/>
                </Icon>
                <Name onClick={toggleReturnDateCalendar}>Return Date</Name>
                <SmallIcon>
                    <FontAwesomeIcon icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}/>
                </SmallIcon>
                {isReturnCalendarOpen && (
                    <DateCalendar offset value={returnDate} onChange={setReturnDate} locale="en-GB"/>
                )}
            </ItemContainer>
            <Marginer direction="horizontal" margin="2em"/>
            <Button text="Book Your Ride"/>
        </BookCardContainer>
    )
}