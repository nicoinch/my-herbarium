import React from 'react';
import clsx from 'clsx';

export type HumidityIconProps = {
  className?: string;
};

export const HumidityIcon: React.FC<HumidityIconProps> = ({
  className = '',
}) => (
  <div className="flex justify-center items-center aspect-square w-full">
    <svg
      width="5"
      height="19"
      viewBox="0 0 15 19"
      stroke="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('w-full', className)}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.83757 0.455233C8.65316 0.171352 8.33764 4.46526e-05 7.99912 8.70468e-09C7.6606 -4.45756e-05 7.34503 0.17118 7.16054 0.455012L1.96054 8.45501C1.94248 8.48281 1.92591 8.5113 1.91086 8.54036C1.31213 9.5948 0.997426 10.7869 0.997987 12C0.998555 13.2284 1.32236 14.435 1.93689 15.4987C2.55141 16.5623 3.43501 17.4455 4.49892 18.0595C5.56283 18.6735 6.7696 18.9968 7.99799 18.9968C9.22638 18.9968 10.4331 18.6735 11.4971 18.0595C12.561 17.4455 13.4446 16.5623 14.0591 15.4987C14.662 14.4551 14.9851 13.2739 14.9976 12.0695C14.9992 12.0465 15 12.0234 15 12C15 11.977 14.9992 11.9542 14.9977 11.9316C14.9865 10.7268 14.6645 9.54496 14.0623 8.50053C14.0535 8.48519 14.0442 8.47009 14.0346 8.45523L8.83757 0.455233ZM12.8976 11C12.7924 10.4829 12.6056 9.98358 12.3423 9.52148L7.99874 2.83527L3.66095 9.50881C3.39383 9.97445 3.20453 10.4781 3.09835 11H12.8976ZM3.09966 13C3.2071 13.5246 3.39856 14.0307 3.66863 14.4981C4.10758 15.2579 4.73872 15.8887 5.49865 16.3273C6.25859 16.7659 7.12056 16.9968 7.99799 16.9968C8.87541 16.9968 9.73738 16.7659 10.4973 16.3273C11.2573 15.8887 11.8884 15.2579 12.3273 14.4981C12.5974 14.0307 12.7889 13.5246 12.8963 13H3.09966Z"
      />
    </svg>
  </div>
);
