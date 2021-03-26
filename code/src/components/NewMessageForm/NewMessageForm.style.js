import styled from "styled-components";

const Form = styled.form`
  background-color: #f2f0f0;
  border: 2px solid #7e7e7e;
  box-shadow: 8px 8px 0 0 #000;
  margin-bottom: calc(var(--spacing) * 8);
  padding: calc(var(--spacing) * 4);
`;

const FormLabel = styled.label`
  display: block;
  padding-bottom: calc(var(--spacing) * 4);
  font-weight: 500;
`;

const FormInput = styled.input`
  border: 1px solid #aeaeae;
  padding: 0 calc(var(--spacing) * 2);
  width: 100%;
  height: 65px;
`;

const SendButton = styled.button`
  border: none;
  background-color: #ffadad;
  color: #000;
  padding: calc(var(--spacing) * 2) calc(var(--spacing) * 4);
  border-radius: 50px;
`;

const LimitedCharacters = styled.span`
  background-color: #aeaeae;
`;

export { Form, FormLabel, FormInput, SendButton, LimitedCharacters };
