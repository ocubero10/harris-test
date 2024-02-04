import { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children?: ReactNode | string;
  disabled?: boolean;
}

const Button = ({ onClick, disabled, children }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={disabled ? "btn-disabled" : ""}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
