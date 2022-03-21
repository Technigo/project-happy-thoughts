import React from "react";

import Header from "components/Header";
import ThoughtCards from "components/ThoughtCards";
import ThoughtForm from "components/ThoughtForm";

export const Entry = () => {
  return (
    <>
      <Header />
      <main>
      <ThoughtForm />
      <ThoughtCards />
      </main>
    </>
  )
}
