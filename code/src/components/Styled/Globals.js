import styled from 'styled-components';

export const P = styled.p`
  font-size: 16px;
  color: ${(props) => (props.faded ? 'grey' : 'black')};
`;

export const H3 = styled.h3`
  font-size: 20px;
`;

export const TextArea = styled.textarea`
  resize: vertical;
  padding: 1em;
  margin: 1em 0;
  width: calc(100% - 2em);
`;
