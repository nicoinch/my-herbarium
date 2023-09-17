import React from 'react';
import clsx from 'clsx';

export type SunIconProps = {
  className?: string;
  crossedOut?: boolean;
};

export const SunIcon: React.FC<SunIconProps> = ({
  className = '',
  crossedOut = false,
}) => (
  <div className="flex justify-center items-center aspect-square w-full">
    {crossedOut ? (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        stroke="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx('w-full', className)}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L4.30686 2.89265C4.30694 2.89273 4.30703 2.89281 4.30711 2.89289L5.00711 3.59289L16.4071 14.9929L17.1071 15.6929L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L15.6929 17.1071L14.9929 16.4071L12.7579 14.1721C11.9458 14.7102 10.9874 15.0036 9.99865 15.0041C8.67254 15.0048 7.40047 14.4787 6.46227 13.5415C5.52407 12.6043 4.9966 11.3328 4.9959 10.0067C4.99537 9.01611 5.28878 8.05572 5.82789 7.2421L3.59289 5.00711L2.89289 4.30711C2.89275 4.30696 2.8926 4.30681 2.89245 4.30667L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893ZM6.9959 10.0056C6.99566 9.55128 7.09847 9.10754 7.2914 8.70562L11.2944 12.7086C10.8934 12.9011 10.4508 13.0039 9.99759 13.0041C9.20191 13.0045 8.43866 12.6888 7.87573 12.1265C7.3128 11.5642 6.99632 10.8013 6.9959 10.0056ZM9.07612 5.61732C9.2309 5.24364 9.59554 5 10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 10.4045 14.7564 10.7691 14.3827 10.9239C14.009 11.0787 13.5789 10.9931 13.2929 10.7071L9.29289 6.70711C9.00689 6.42111 8.92134 5.99099 9.07612 5.61732ZM11 1C11 0.447715 10.5523 1.49012e-08 10 1.49012e-08C9.44771 1.49012e-08 9 0.447715 9 1V2C9 2.55228 9.44771 3 10 3C10.5523 3 11 2.55228 11 2V1ZM17.1071 4.30711C17.4976 3.91658 17.4976 3.28342 17.1071 2.89289C16.7166 2.50237 16.0834 2.50237 15.6929 2.89289L14.9929 3.59289C14.6024 3.98342 14.6024 4.61658 14.9929 5.00711C15.3834 5.39763 16.0166 5.39763 16.4071 5.00711L17.1071 4.30711ZM1 9C0.447715 9 1.49012e-08 9.44771 1.49012e-08 10C1.49012e-08 10.5523 0.447715 11 1 11H2C2.55228 11 3 10.5523 3 10C3 9.44771 2.55228 9 2 9H1ZM18 9C17.4477 9 17 9.44771 17 10C17 10.5523 17.4477 11 18 11H19C19.5523 11 20 10.5523 20 10C20 9.44771 19.5523 9 19 9H18ZM5.00711 16.4071C5.39763 16.0166 5.39763 15.3834 5.00711 14.9929C4.61658 14.6024 3.98342 14.6024 3.59289 14.9929L2.89289 15.6929C2.50237 16.0834 2.50237 16.7166 2.89289 17.1071C3.28342 17.4976 3.91658 17.4976 4.30711 17.1071L5.00711 16.4071ZM11 18C11 17.4477 10.5523 17 10 17C9.44771 17 9 17.4477 9 18V19C9 19.5523 9.44771 20 10 20C10.5523 20 11 19.5523 11 19V18Z"
        />
      </svg>
    ) : (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        stroke="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx('w-full', className)}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 1C11 0.447715 10.5523 0 10 0C9.44771 0 9 0.447715 9 1V2C9 2.55228 9.44771 3 10 3C10.5523 3 11 2.55228 11 2V1ZM4.30711 2.89289C3.91658 2.50237 3.28342 2.50237 2.89289 2.89289C2.50237 3.28342 2.50237 3.91658 2.89289 4.30711L3.59289 5.00711C3.98342 5.39763 4.61658 5.39763 5.00711 5.00711C5.39763 4.61658 5.39763 3.98342 5.00711 3.59289L4.30711 2.89289ZM17.1071 4.30711C17.4976 3.91658 17.4976 3.28342 17.1071 2.89289C16.7166 2.50237 16.0834 2.50237 15.6929 2.89289L14.9929 3.59289C14.6024 3.98342 14.6024 4.61658 14.9929 5.00711C15.3834 5.39763 16.0166 5.39763 16.4071 5.00711L17.1071 4.30711ZM1 9C0.447715 9 0 9.44771 0 10C0 10.5523 0.447715 11 1 11H2C2.55228 11 3 10.5523 3 10C3 9.44771 2.55228 9 2 9H1ZM18 9C17.4477 9 17 9.44771 17 10C17 10.5523 17.4477 11 18 11H19C19.5523 11 20 10.5523 20 10C20 9.44771 19.5523 9 19 9H18ZM5.00711 16.4071C5.39763 16.0166 5.39763 15.3834 5.00711 14.9929C4.61658 14.6024 3.98342 14.6024 3.59289 14.9929L2.89289 15.6929C2.50237 16.0834 2.50237 16.7166 2.89289 17.1071C3.28342 17.4976 3.91658 17.4976 4.30711 17.1071L5.00711 16.4071ZM16.4071 14.9929C16.0166 14.6024 15.3834 14.6024 14.9929 14.9929C14.6024 15.3834 14.6024 16.0166 14.9929 16.4071L15.6929 17.1071C16.0834 17.4976 16.7166 17.4976 17.1071 17.1071C17.4976 16.7166 17.4976 16.0834 17.1071 15.6929L16.4071 14.9929ZM11 18C11 17.4477 10.5523 17 10 17C9.44771 17 9 17.4477 9 18V19C9 19.5523 9.44771 20 10 20C10.5523 20 11 19.5523 11 19V18ZM7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10ZM10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5Z"
        />
      </svg>
    )}
  </div>
);
