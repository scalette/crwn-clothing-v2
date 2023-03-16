import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import "./sign-up-form.style.scss"
import { auth } from '../../utils/firebase/firebase.utils'
import Button from '../button/button.component'
import { signUpStart } from '../../store/user/user.action'

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

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormFields({
      ...formFields,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!password && password !== confirmPassword){
      alert('Provide password or password does not match')
      return
    }
    try {
      dispatch(signUpStart(email, password, displayName))

      resetFormField()
    } catch(error) {
      if(error.code === 'auth/email-already-in-use'){
        alert('Email already in use')
      } else {
        console.log(`error occured during sign up ${error.message}`)
      }
    }
  }

  return (
  <div className='sign-up-container'>
    <h2>Don't have an account?</h2>
    <span>Sign up with your email and password</span>
    <form onSubmit={handleSubmit}>
      <FormInput 
        label="Display Name"
        inputOptions = {{
          type: "text",
          required: true,
          onChange: handleChange,
          name: 'displayName',
          value: displayName,
        }}
        
      />
      
      <FormInput 
        label="Email"
        inputOptions = {{
          type: "email",
          required: true,
          onChange: handleChange,
          name: 'email',
          value: email,
        }}
      />
      
      <FormInput 
        label="Password"
        inputOptions = {{
          type: "password",
          required: true,
          onChange: handleChange,
          name: 'password',
          value: password,
        }}
      />
      
      <FormInput 
        label="Confirm password"
        inputOptions = {{
          type: "password",
          required: true,
          onChange: handleChange,
          name: 'confirmPassword',
          value: confirmPassword,
        }}
      />
      <Button type="submit">Sign Up</Button>
    </form>
  </div>
  )
}

export default SignUpForm