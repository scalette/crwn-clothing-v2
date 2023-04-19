import { InputHTMLAttributes, FC } from 'react'

import { ForimInputLabel, Input, Group } from './form-input.style'

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>

const FormInput: FC<FormInputProps> = ({label, ...inputOptions}) => {
  return (
    <Group>
    <Input {...inputOptions}></Input>
      {ForimInputLabel && (
          <ForimInputLabel shrink={Boolean(inputOptions.value && typeof inputOptions.value === 'string' && inputOptions.value.length)}>
              {label}
          </ForimInputLabel>
        )
      }
    </Group>
  )
}

export default FormInput