import { useState, FormEvent, ChangeEvent } from 'react'
import FormInput from '../form-input/form-input.component'
import "./sign-in-form.style.scss"
import { auth } from '../../utils/firebase/firebase.utils'
import { useDispatch } from 'react-redux'
import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component'
import { googlSignInStart, emailSignInStart } from '../../store/user/user.action'

const defaultFormFields = {
  email: '',
  password: '',
}


const SignInForm = () => {
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {email, password } = formFields
  const resetFormField = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (event: ChangeEvent<HTMLFormElement>) => {
    const {name, value} = event.target
    setFormFields({
      ...formFields,
      [name]: value
    })
  }

  const signInWithGoogle = async () => {
    dispatch(googlSignInStart())
  }
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!password){
      alert('Provide password')
      return
    }
    try {
      dispatch(emailSignInStart(email, password))
      resetFormField()
    } catch(error) {
      switch(error) {
        case 'auth/user-not-found':
          alert('User not found')
          break
        case 'auth/wrong-password':
          alert('Incorrect password for email')
          break
        default:
          console.log(error)
      }
    }
  }

  return (
  <div className='sign-up-container'>
    <h2>Already have an account</h2>
    <span>Sign in with your email and password</span>
    <form onSubmit={handleSubmit}>
      <FormInput 
        label="Email"
        type = "email"
        required
        //@ts-ignore
        onChange = {handleChange}
        name = 'email'
        value = {email}
      />
      <FormInput 
        label="Password"
        type= "password"
        required
        //@ts-ignore
        onChange= {handleChange}
        name= 'password'
        value= {password}
      />
      <div className='buttons-container'>
        <Button type="submit">Sign In</Button>
        <Button type="button" buttonType={BUTTON_TYPES_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
      </div>
    </form>
  </div>
  )
}

export default SignInForm