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

Card.Actions = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

Card.FooterText = styled(P)`
  margin: 0 10px;
  margin-left: ${(props) => (props.alignRight ? 'auto' : '')};
`;

Card.Footer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

Card.Pills = styled.div`
  margin: 1em 0.5em 1em 0;
  padding: 0.5em;
  background-color: pink;
  border-radius: 15px;
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
