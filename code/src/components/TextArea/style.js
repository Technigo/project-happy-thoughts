import styled from 'styled-components';

import { P } from 'components/Styled/Globals';

const TextAreaStyled = styled.textarea`
  resize: vertical;
  padding: 1em;
  margin: 1em 0;
  width: calc(100% - 2em);
  border-radius: 10px;
  outline: none;
`;

TextAreaStyled.Counter = styled(P)`
  float: right;
`;

export default TextAreaStyled;
