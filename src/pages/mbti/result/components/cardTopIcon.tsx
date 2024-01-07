import React, { CSSProperties } from 'react';

const CardTopIcon: React.FC<{
  fill: CSSProperties['color'];
}> = ({ fill }) => {
  return (
    <svg style={{ width: '100%' }} height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 0.182863H28.5641L141.058 0H229.972H259.419H309.951H330.128L345 1.44845e-05V39.0685L321.048 37.2506L253.363 39L213.575 37.2506L189.336 40L176.531 36.2506L111.589 40L69.0573 36.3759L26.9827 40L0 39.3752V28.0697V0.182863Z"
        fill={fill}
        fillOpacity="0.2"
      />
    </svg>
  );
};
CardTopIcon.defaultProps = {
  fill: '#FF9933',
};
export default CardTopIcon;
