import { PropsWithChildren } from 'react';

interface LIProps {
  className?: string;
}

const LI = ({ children, className = '' }: PropsWithChildren<LIProps>) => {
  return <li className={className}>{children}</li>;
};

export default LI;
