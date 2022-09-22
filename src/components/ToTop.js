import React, { useState } from "react";
import ArrowUpCircle from "../assets/img/chevron-up.svg";

export const ToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="to-top">
      <div
        onClick={scrollToTop}
        id="to-top"
        style={{ display: visible ? "block" : "none" }}
      >
        <img src={ArrowUpCircle} alt="to top" />
      </div>
    </div>
  );
};

export default ToTop;
