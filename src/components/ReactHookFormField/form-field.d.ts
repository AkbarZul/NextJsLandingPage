import { Control, RegisterOptions } from 'react-hook-form'

interface ReactHookFieldProps<TFormField, TName> {
  name: TName
  control: Control<TFormField>
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >
  disabled?: boolean
  wrapperClassName?: string
}
