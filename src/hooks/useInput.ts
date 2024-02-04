import { useState } from "react";

const useInput = (initialValue: string) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return {
    inputValue,
    onChange: handleChange,
  };
};

export default useInput;
