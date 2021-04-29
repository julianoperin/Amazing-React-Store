import React from "react";

const BackToTop = () => {
  const scrollBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <p onClick={scrollBackToTop} className="back__top">
      Back to top
    </p>
  );
};

export default BackToTop;
