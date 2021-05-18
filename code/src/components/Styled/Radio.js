import styled from 'styled-components';

const Radio = styled.div`
  margin: 1em 0.5em;
`;

Radio.Label = styled.label`
  background-color: pink;
  border-radius: 15px;
  padding: 0.5em;
`;
Radio.Input = styled.input`
  display: none;
  :checked + label {
    background-color: #ff8298;
  }
  :disabled + label {
    background-color: lightgrey;
  }
  :hover:not(:checked) + label,
  :focus + label {
    cursor: pointer;
    transform: scale(1.05);
    border: 2px solid grey;
  }
`;

export default Radio;
