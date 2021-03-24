import styled from 'styled-components';

export const P = styled.p`
  font-size: 16px;
  margin: 0;
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
  border-radius: 10px;
  outline: none;
  
  &:focus:valid {
    border:2px solid green;
  }
  
  &:focus:invalid {
    color: red;
    border:2px solid red;
  }
`;

TextArea.Counter = styled(P)`
  float: right;
`;