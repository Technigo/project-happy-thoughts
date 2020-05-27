import styled from 'styled-components'

export const Title = styled.p`
color: black;
font-size: 1em;
max-width: 90%;
word-break: break-all;
text-align: left;
`

export const Paragraf = styled.p`
  color: ${props => props.inputColor || "gray"};
  text-align: right;

`

