import { Html, useProgress } from "@react-three/drei";
import React from "react";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-[10vw] h-[10vw] rounded-full text-4xl flex items-center justify-center">
          Loading...{Math.floor(progress)}%
        </div>
      </div>
    </Html>
  );
};

export default Loader;
