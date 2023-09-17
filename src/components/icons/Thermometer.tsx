import React from 'react';
import clsx from 'clsx';

export type ThermometerIconProps = {
  className?: string;
};

export const ThermometerIcon: React.FC<ThermometerIconProps> = ({
  className = '',
}) => (
  <div className="flex justify-center items-center aspect-square">
    <svg
      width="10"
      height="20"
      viewBox="0 0 10 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('w-full', className)}
    >
      <path
        d="M3 11.5C2.23743 11.9403 1.64145 12.6199 1.30448 13.4334C0.967516 14.2469 0.908398 15.1488 1.1363 15.9994C1.3642 16.8499 1.86638 17.6015 2.56496 18.1375C3.26353 18.6736 4.11946 18.9641 5 18.9641C5.88054 18.9641 6.73647 18.6736 7.43505 18.1375C8.13362 17.6015 8.63581 16.8499 8.86371 15.9994C9.09161 15.1488 9.03249 14.2469 8.69552 13.4334C8.35855 12.6199 7.76257 11.9403 7 11.5V3C7 2.46957 6.78929 1.96086 6.41422 1.58579C6.03914 1.21071 5.53043 1 5 1C4.46957 1 3.96086 1.21071 3.58579 1.58579C3.21072 1.96086 3 2.46957 3 3V11.5Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);
