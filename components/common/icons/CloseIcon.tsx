/* eslint-disable max-len */
import React from 'react';

interface CloseIconProps {
  color?: string;
}

const CloseIcon: React.FC<CloseIconProps> = ({ color = '#fff' }) => (
  <svg
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    fill={color}
  >
    <path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path>
  </svg>
);

export default CloseIcon;
