import React, { InputHTMLAttributes, ReactNode } from "react";

import cn from "@/helper/cn";

export type StandardTextFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> & {
  label?: string;
  size?: "sm" | "md" | "lg" | "xl";
  errorMessage?: string;
  helperMessage?: ReactNode;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
};

const InputText: React.FC<StandardTextFieldProps> = ({
  className,
  label,
  type = "text",
  id = "input",
  value = "",
  onChange,
  placeholder,
  disabled,
  errorMessage,
  helperMessage,
  size = "lg",
  name,
  inputProps,
  ...props
}: StandardTextFieldProps) => {
  const sizes = {
    sm: "h-10 rounded-xl",
    md: "h-12 rounded-[14px]",
    lg: "h-14 rounded-2xl",
    xl: "h-16 rounded-2xl",
  };

  const labelSizes = {
    sm: "text-2xs my-1 ml-3",
    md: "text-2xs my-2 ml-4",
    lg: "text-2xs my-2.5 ml-4",
    xl: "text-xs my-2.5 ml-5",
  };

  const inputSizes = {
    sm: "text-xs",
    md: "text-xs",
    lg: "text-sm",
    xl: "text-base",
  };

  return (
    <div {...props} className={cn("font-sans inline-flex flex-col", className)}>
      {label && (
        <label htmlFor={id} className={cn("text-[#696F79]", labelSizes[size])}>
          {label}
        </label>
      )}

      <div
        className={cn([
          sizes[size],
          "max-w-full inline-flex border border-line-active bg-white p-4 focus-within:outline-2 focus-within:rounded-2xl focus-within:outline-[#EFC81A]",
          errorMessage && "border-red",
        ])}
      >
        <input
          data-testid={"input_" + name}
          id={id}
          value={value}
          name={name}
          onChange={onChange}
          disabled={disabled}
          type={type}
          placeholder={placeholder}
          title={value as string}
          className={cn(
            "focus-visible:outline-none w-full placeholder:text-[#696F79] text-black ",
            value && "bg-surface",
            disabled && "bg-[#696F79] placeholder:text-white text-black",
            inputSizes[size],
            inputProps?.className
          )}
          {...inputProps}
        />
      </div>

      {helperMessage && <>{helperMessage}</>}
      {errorMessage && (
        <div
          data-testid={"error_input_" + name}
          className="text-red text-2xs mt-1"
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default InputText;
