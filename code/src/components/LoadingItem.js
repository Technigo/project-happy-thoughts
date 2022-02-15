import React from 'react';
import Lottie from 'react-lottie';
import heart from '../animations/heart.json';
import styled from 'styled-components';
const LoadingItem = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: heart,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <LoaderWrapper>
      <Lottie options={defaultOptions} height={500} width={500} />
    </LoaderWrapper>
  );
};

export default LoadingItem;

//--------- STYLED COMPONENTS ----------//
const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
