import InputForm from "../elements/input/Index";
import Button from "../elements/button/Button";

const FormLogin = () => {
  return (
    <form action="">
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
      <Button variant='bg-blue-700 w-full'>Login</Button>
    </form>
  )
};

export default FormLogin;