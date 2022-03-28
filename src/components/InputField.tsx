import {
  DetailedHTMLProps,
  FunctionComponent,
  InputHTMLAttributes,
} from "react";
import { clsxm } from "../util/helpers";

const InputField: FunctionComponent<
  {
    id: string;
    placeholder: string;
  } & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ ...inputProps }) => {
  return (
    <div className="relative mt-0 w-full select-none">
      <input
        {...inputProps}
        className={clsxm(
          "peer h-10 w-full overflow-hidden rounded bg-gray-100 px-2 text-lg text-gray-700 placeholder-transparent ring-1 ring-blue-400 transition-all focus:outline-none",
          "placeholder-shown:ring-gray-300",
          "focus:ring-blue-400"
        )}
      />
      <label
        htmlFor={inputProps.id}
        className={clsxm(
          "absolute left-0 -top-5 select-none px-0 text-xs font-medium text-gray-500 transition-all",
          "peer-placeholder-shown:top-[15%] peer-placeholder-shown:cursor-text peer-placeholder-shown:px-2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-600",
          "peer-focus:-top-5 peer-focus:cursor-default peer-focus:px-0 peer-focus:text-xs peer-focus:text-gray-500"
        )}
      >
        {inputProps.placeholder}
      </label>
    </div>
  );
};

export default InputField;
