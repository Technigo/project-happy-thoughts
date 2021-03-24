import styled from 'styled-components';

import breakpoint from 'helpers/breakpoints';

const Main = styled.main`
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;

  ${breakpoint('sm')`
    width: 80%;
  `}
  ${breakpoint('md')`
    width: 50%;
  `}
  ${breakpoint('lg')`
    width: 40%;
  `}
`;

export default Main;
