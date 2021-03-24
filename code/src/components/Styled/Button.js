import styled from 'styled-components';

const Button = styled.button`
  background-color: pink;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  ${(props) => props.type === 'submit'
    && `width: fit-content;
  padding: 0 25px;`}
`;

Button.Emoji = styled.span`
  font-size= 14px;
`;

Button.Text = styled.span`
  margin: 0 10px;
`;

export default Button;
