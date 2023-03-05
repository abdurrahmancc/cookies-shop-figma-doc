import React from "react";
import Introduction from "./introduction/Introduction";
import Features from "./features/Features";

const Welcome = () => {
  return (
    <div className="w-full">
      <article>
        <Introduction />
      </article>
      <section>
        <Features />
      </section>
    </div>
  );
};

export default Welcome;
