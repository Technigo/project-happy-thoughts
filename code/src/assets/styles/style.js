import styled from "styled-components";

const MainWrapper = styled.div`
  max-width: 600px;
  padding: calc(var(--spacing) * 8) calc(var(--spacing) * 4);
  margin: 0 auto;
`;

const ButtonContainer = styled.div`
  padding-top: calc(var(--spacing) * 4);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { MainWrapper, ButtonContainer };
