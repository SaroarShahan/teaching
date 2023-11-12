import { ChangeEvent } from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  type = 'text',
  value = '',
  placeholder = 'Enter your value here...',
  onChange,
}: InputProps) => {
  return <input type={type} onChange={onChange} value={value} placeholder={placeholder} />;
};

export default Input;
