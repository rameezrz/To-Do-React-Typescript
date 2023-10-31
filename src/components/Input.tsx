import { type ReactSetState } from "../types/utils";

type Input = {
  type: "text" | "color" | "checkbox";
  inputValue: string;
  setInputValue: ReactSetState<string>;
};

const Input = ({ type, inputValue, setInputValue }: Input) => {
  return (
    <input
      type={type}
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
      className="w-full p-2 mb-2 rounded-sm"
    />
  );
};

export default Input;
