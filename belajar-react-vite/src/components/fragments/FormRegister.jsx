import InputForm from "../elements/input/Index";
import Button from "../elements/button/Button";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm 
        label='Fullname' 
        type='text' 
        placeholder='insert your name here...' 
        name='fullname' 
      />
      <InputForm 
        label='Email' 
        type='email' 
        placeholder='email@example.com' 
        name='email' 
      />
      <InputForm 
        label='Password' 
        type='password' 
        placeholder='******' 
        name='password' 
      />
      <InputForm 
        label='Confirm Password' 
        type='password' 
        placeholder='******' 
        name='confirmPassword' 
      />
      <Button variant='bg-blue-700 w-full'>Register</Button>
    </form>
  )
};

export default FormRegister;