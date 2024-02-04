import { ReactNode, useState } from "react";
import "./input-group.css";
import Button from "../button/button";
import useInput from "../../hooks/useInput";

interface InputProps {
  label?: string;
  placeholder?: string;
  buttonContent?: ReactNode | string;
  error?: {
    showError: boolean;
    errorMessage: string;
  };
  onClick?: (searchTerm: string) => void | (() => void);
}

const InputGroup = ({
  label,
  placeholder,
  buttonContent,
  error,
  onClick,
}: InputProps) => {
  const { inputValue, onChange } = useInput("");

  const handleOnClick = () => {
    if (!onClick) return;
    onClick(inputValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onClick && onClick(inputValue);
    }
  };

  return (
    <div className="input-group">
      {label && <label htmlFor="search-input">{label}</label>}
      <input
        id="search-input"
        type="text"
        placeholder={placeholder}
        aria-label="Search"
        aria-describedby="search-input"
        onKeyDown={handleKeyDown}
        value={inputValue}
        onChange={onChange}
      />
      {buttonContent && (
        <Button onClick={handleOnClick}>{buttonContent}</Button>
      )}
      {error?.showError && (
        <span className="errorMessage">{error.errorMessage}</span>
      )}
    </div>
  );
};

export default InputGroup;
