import { Controller, FieldPath, FieldValues } from "react-hook-form";

import InputText from "@/components/InputText";
import { StandardTextFieldProps } from "@/components/InputText/InputText";

import { ReactHookFieldProps } from "./form-field";

type Props<TFormField, TName> = ReactHookFieldProps<TFormField, TName> &
  StandardTextFieldProps;

const TextField = <
  TFormField extends FieldValues,
  TName extends FieldPath<TFormField>
>({
  control,
  name,
  rules,
  disabled,
  ...props
}: Props<TFormField, TName>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <InputText
          type="text"
          {...props}
          id={field.name}
          name={field.name}
          value={field.value as string}
          onChange={(e) => field.onChange(e.target.value)}
          errorMessage={fieldState.error?.message}
          disabled={disabled}
        />
      )}
    />
  );
};

export default TextField;
