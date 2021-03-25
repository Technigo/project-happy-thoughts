import styled from 'styled-components';

export const P = styled.p`
  font-size: 16px;
  margin: 0;
  color: ${(props) => (props.faded ? 'grey' : 'black')};
`;

export const H3 = styled.h3`
  font-size: 20px;
`;
