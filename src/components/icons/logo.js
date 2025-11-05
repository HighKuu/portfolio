import React from 'react';

const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
    <title>Logo</title>
    <g transform="translate(-8.000000, -2.000000)">
      <g transform="translate(11.000000, 5.000000)">
        {/* Hexagone rempli avec fond bleu foncé */}
        <polygon
          id="Shape"
          fill="#0a192f"
          stroke="#64ffda"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
        />
        {/* H en cyan/turquoise */}
        <path
          d="M 30,28 L 30,62 M 30,45 L 48,45 M 48,28 L 48,62"
          stroke="#64ffda"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </g>
  </svg>
);

export default IconLogo;
