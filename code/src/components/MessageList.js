import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

import { MessageElement } from './MessageElement';
import { 
  PaginationContainer, 
  SortButton, 
  SortButtonContainer } from './Styling';

export const MessageList = ({ 
  handleNewest, 
  handleOldest, 
  handleLiked,
  pageCount,
  page,
  handlePageChange, 
  messageList, 
  handleLikeClick }) => {

  return ( 
    <>
      <SortButtonContainer>
        <SortButton onClick={handleNewest}>Newest</SortButton>
        <SortButton onClick={handleOldest}>Oldest</SortButton>
        <SortButton onClick={handleLiked}>Most Liked</SortButton>
      </SortButtonContainer>
      {messageList.map(message => (
        <MessageElement 
          key={message._id} 
          message={message}
          onLikeClick={handleLikeClick} />
      ))}
      <PaginationContainer>
        <Pagination 
          count={pageCount} 
          page={page} 
          onChange={handlePageChange}/>
      </PaginationContainer>
    </>
  )
};