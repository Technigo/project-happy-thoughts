import styled from 'styled-components';

import { H3, P } from 'components/Styled/Globals';

const Card = styled.div`
  border: 1px solid black;
  box-shadow: 10px 10px black;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  word-break: break-word;
  position: relative;
`;

Card.Title = styled(H3)`
  font-weight: normal;
  width: 100%;
`;

Card.FooterText = styled(P)`
  margin: 0 10px;
  margin-left: ${(props) => (props.alignRight ? 'auto' : '')};
`;

Card.Footer = styled.div`
  display: flex;
  align-items: center;
`;

Card.ErrorWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: pink;
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
  justify-content: center;

  & > * {
    color: red;
    margin: 0;
  }
`;

export default Card;
