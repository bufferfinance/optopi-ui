import { SVGProps } from 'react';

const Gitbook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.498 17.508a.866.866 0 0 0-.878.852c0 .47.394.852.878.852a.866.866 0 0 0 .877-.852.866.866 0 0 0-.877-.852Zm-13.78-5.28a.866.866 0 0 0 .877-.853.866.866 0 0 0-.878-.853.866.866 0 0 0-.877.853c0 .47.394.852.877.852Zm0-3.493c1.498 0 2.717 1.184 2.717 2.64 0 .283-.049.566-.144.84l8.976 4.642a2.73 2.73 0 0 1 2.231-1.137c1.036 0 1.98.576 2.437 1.476l8.064-4.13c.852-.436 1.49-1.8 1.422-3.04-.035-.648-.265-1.15-.616-1.344-.222-.123-.49-.112-.774.033l-.054.027c-2.136 1.094-9.13 4.672-9.424 4.805-.455.204-.707.287-1.481-.07L1.615 6.174c-.212-.077-.459-.275-.459-.574 0-.416.444-.58.444-.58.822-.382 2.086-.957 3.319-1.518C7.553 2.303 10.539.944 11.85.277c1.132-.576 2.044-.09 2.206.008l.316.151c5.903 2.836 13.802 6.637 14.251 6.903.806.476 1.304 1.424 1.369 2.602.1 1.866-.88 3.812-2.28 4.526l-8.528 4.272C18.993 20.032 17.848 21 16.498 21c-1.485 0-2.695-1.163-2.717-2.6l-9.392-4.945a2.77 2.77 0 0 1-1.672.56C1.22 14.015 0 12.83 0 11.375c0-1.456 1.22-2.64 2.717-2.64Z"
      fill="currentColor"
    />
  </svg>
);

export default Gitbook;
