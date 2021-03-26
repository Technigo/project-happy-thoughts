import styled from "styled-components";

const LikeCountContainer = styled.div``;

const LikeButton = styled.button`
  padding: calc(var(--spacing) * 4);
  background-color: ${({ likes }) => (likes === 0 ? "#eaeaea" : "#ffadad")};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: calc(var(--spacing) * 2);
`;

const LikeCount = styled.span`
  color: #7a7a7a;
`;

const Time = styled.p`
  color: #7a7a7a;
`;

export { LikeButton, LikeCount, LikeCountContainer, Time };
