import {useEffect, useState} from "react";

export function WarningIcon({width = 24, height = 24, fill = 'black'}) {
  const [color, setColor] = useState('black')

  useEffect(() => {
    setInterval(() => {
      setColor(color === 'black' ? 'red' : 'black')
    }, 2000)
  }, []);


  return (
      <svg
          width={width}
          height={height}
          fill={color}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 7H13V13H11V7ZM11 15H13V17H11V15Z"
        />
      </svg>
  );

}