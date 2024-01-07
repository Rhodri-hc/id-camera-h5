import React from 'react';
import { IconProps } from '@/components/icons/config';

const RoundCloseIcon: React.FC<IconProps> = ({ color = '#FF8585', ...rest }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1634_6261)">
        <rect width="20" height="20" rx="10" fill={color} />
        <path
          d="M13.75 6.25L6.25 13.75"
          stroke="white"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.25 6.25L13.75 13.75"
          stroke="white"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1634_6261">
          <rect width="20" height="20" rx="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default RoundCloseIcon;
