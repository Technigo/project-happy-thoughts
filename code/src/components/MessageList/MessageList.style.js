import styled from "styled-components";

const MessageListContainer = styled.ul`
  /* padding: 32px; */
`;

const MessageListItemContainer = styled.li`
  border: 2px solid #7e7e7e;
  margin-bottom: calc(var(--spacing) * 10);
  padding: calc(var(--spacing) * 4);
  box-shadow: 8px 8px 0 0 #000;
`;

export { MessageListContainer, MessageListItemContainer };
