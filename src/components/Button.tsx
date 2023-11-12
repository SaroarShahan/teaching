import { PropsWithChildren } from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  type = 'button',
  className = '',
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
