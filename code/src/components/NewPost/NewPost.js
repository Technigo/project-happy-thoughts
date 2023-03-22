import { SendBtn } from 'components/Buttons/SendBtn/SendBtn';
import React from 'react';
import { Header } from './Header/Header';
import { NewInput } from './NewInput/NewInput';
import './NewPost.css';

export const NewPost = () => {
  return (
    <form className="new-post-wrapper">
      <Header />
      <NewInput />
      <SendBtn />
    </form>
  )
}