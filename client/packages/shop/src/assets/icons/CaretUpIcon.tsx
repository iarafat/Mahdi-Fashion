import React from 'react';
export const CaretUpIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px',
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 10 5'
    >
      <path
        data-name='_ionicons_svg_md-arrow-dropdown (2)'
        d='M128,192l5,5,5-5Z'
        transform='translate(138 197) rotate(180)'
        fill={color}
      />
    </svg>
  );
};
