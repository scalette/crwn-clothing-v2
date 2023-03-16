import { ForimInputLabel, Input, Group } from './form-input.style.jsx'

const FormInput = ({label, inputOptions}) => {
  return (
    <Group>
    <Input {...inputOptions}></Input>
      {ForimInputLabel && (
          <ForimInputLabel shrink={inputOptions.value.length}>
              {label}
          </ForimInputLabel>
        )
      }
    </Group>
  )
}

export default FormInput