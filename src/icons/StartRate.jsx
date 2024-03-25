import React, { useState } from "react";

export function FiveStarRate() {
  const [isFilled, setIsFilled] = useState(false);

  return (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          onClick={() => setIsFilled(true)}
      >
        <path
            fill={isFilled ? "yellow" : "currentColor"}
            d="M12 2l2.5 6.5L21 9l-5 4.5 1 6.5L12 17l-5 3 1-6.5L3 9l6.5-.5L12 2z"
        ></path>
      </svg>
  );
}
