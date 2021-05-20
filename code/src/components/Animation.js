import React from 'react';
import { FaHeart, FaRegEnvelopeOpen } from 'react-icons/fa';
import { 
  MessageAnimation, 
  HeartIcon, 
  LetterIcon, 
  HeartEnvelope } from './Styling';

export const Animation = () => {
  return (
    <MessageAnimation>
      <HeartEnvelope>
        <HeartIcon role='img' aria-label='heart'><FaHeart /></HeartIcon>
        <LetterIcon role='img' aria-label='envelope'><FaRegEnvelopeOpen /></LetterIcon>
      </HeartEnvelope>
    </MessageAnimation>
  )
};