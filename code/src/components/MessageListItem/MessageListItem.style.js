import styled, { keyframes } from "styled-components";

const vibration = keyframes`
   0% {
    -webkit-transform: translate(2px, 1px) rotate(0deg);
  }
  10% {
    -webkit-transform: translate(-1px, -2px) rotate(-2deg);
  }
  20% {
    -webkit-transform: translate(-3px, 0px) rotate(3deg);
  }
  30% {
    -webkit-transform: translate(0px, 2px) rotate(0deg);
  }
  40% {
    -webkit-transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    -webkit-transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    -webkit-transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    -webkit-transform: translate(2px, 1px) rotate(-2deg);
  }
  80% {
    -webkit-transform: translate(-1px, -1px) rotate(4deg);
  }
  90% {
    -webkit-transform: translate(2px, 2px) rotate(0deg);
  }
  100% {
    -webkit-transform: translate(1px, -2px) rotate(-1deg);
  }
`;

const LikeButton = styled.button`
  padding: calc(var(--spacing) * 4);
  background-color: ${({ likes }) => (likes === 0 ? "#eaeaea" : "#ffadad")};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: calc(var(--spacing) * 2);

  &:hover {
    animation-name: ${vibration};
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    transform-origin: 50% 100%;
  }
`;

const LikeCount = styled.span`
  color: #7a7a7a;
`;

const Time = styled.p`
  color: #7a7a7a;
`;

export { LikeButton, LikeCount, Time };
