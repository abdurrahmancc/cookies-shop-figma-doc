import React from "react";

const NotFound = () => {
  return (
    <div className=" h-screen justify-center flex-col gap-y-10 flex items-center">
      <h4 className="text-5xl font-semibold">Not Found Page</h4>
      <button className="btn-primary border-none btn text-neutral px-8 py-2 rounded-full font-semibold">
        Back page
      </button>
    </div>
  );
};

export default NotFound;
