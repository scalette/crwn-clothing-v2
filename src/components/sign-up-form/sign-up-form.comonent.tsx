import { useState, FormEvent, ChangeEvent } from 'react'
import { AuthError, AuthErrorCodes } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import FormInput from '../form-input/form-input.component'
import "./sign-up-form.style.scss"
import Button from '../button/button.component'
import { signUpStart } from '../../store/user/user.action'
import { Form } from 'react-router-dom'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}


const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {displayName, email, password, confirmPassword} = formFields
  const dispatch = useDispatch()

  const resetFormField = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setFormFields({
      ...formFields,
      [name]: value
    })
  }

  const handleSubmit = async (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault()
    if (!password && password !== confirmPassword){
      alert('Provide password or password does not match')
      return
    }
    try {
      dispatch(signUpStart(email, password, displayName))

      resetFormField()
    } catch(error) {
      if((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS){
        alert('Email already in use')
      } else {
        console.log(`error occured during sign up ${error}`)
      }
    }
  }

  return (
  <div className='sign-up-container'>
    <h2>Don't have an account?</h2>
    <span>Sign up with your email and password</span>
    <form 
    //@ts-ignore
    onSubmit={handleSubmit}>
      <FormInput 
        label="Display Name"
        type= "text"
        required
        onChange= {handleChange}
        name= 'displayName'
        value= {displayName}
      />
      
      <FormInput 
        label="Email"
        type = "email"
        required
        onChange = {handleChange}
        name = 'email'
        value = {email}
      />
      
      <FormInput 
        label="Password"
        type = "password"
        required
        onChange = {handleChange}
        name = 'password'
        value = {password}
      />
      
      <FormInput 
        label="Confirm password"
        type = "password"
        required
        onChange = {handleChange}
        name = 'confirmPassword'
        value = {confirmPassword}
      />
      <Button type="submit">Sign Up</Button>
    </form>
  </div>
  )
}

export default SignUpForm