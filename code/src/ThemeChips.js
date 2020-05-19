import React from 'react'
import styled from 'styled-components'

const ChipContainer = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: #ffadad;
  opacity: ${props => props.text === props.theme ? '1' : '.5'};
  border-radius: 500px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 15px;
  margin: 0 5px;
`

const ChipPic = styled.img`
  width: 30px;
  border-radius: 50%;
  margin-right: 5px;
`

const ChipText = styled.p`
  margin: 0;
`


export const ThemeChip = (props) => {

    return (
        <ChipContainer type="button" onClick={props.function} text={props.text} theme={props.theme}>
            <ChipPic src={props.image} />
            <ChipText>{props.text}</ChipText>
        </ChipContainer>
    )
}
