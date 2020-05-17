import React from "react";

export const NextPage = ({ page, setPage, length }) => {
  const handleBackClick = (event) => {
    event.preventDefault();
    setPage(page - 1);
  };

  const handleForwardClick = (event) => {
    event.preventDefault();
    setPage(page + 1);
  };

  return (
    <div>
      {page !== 1 && <button onClick={handleBackClick}>{"<"}</button>}
      {page}
      <button onClick={handleForwardClick}>{">"}</button>
    </div>
  );
};
