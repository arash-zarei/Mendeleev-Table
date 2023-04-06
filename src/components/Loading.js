import React from "react";

// Spinner
import { RingLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 bg-black/80">
      <RingLoader color="#ff0000" size={100} />
    </div>
  );
};

export default Loading;
