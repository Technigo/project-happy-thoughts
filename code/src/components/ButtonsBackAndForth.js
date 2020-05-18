import React from "react";

export const ButtonsBackAndForth = ({
  disabledBack,
  disabledForth,
  onClickBack,
  onClickForth,
  page,
  totalPages,
}) => {
  return (
    <div className="pages-back-forth">
      <button
        disabled={disabledBack}
        className="pages-back-forth-btn"
        onClick={onClickBack}
      >
        {"<"}
      </button>
      {page} / {totalPages}
      <button
        disabled={disabledForth}
        className="pages-back-forth-btn"
        onClick={onClickForth}
      >
        {">"}
      </button>
    </div>
  );
};
