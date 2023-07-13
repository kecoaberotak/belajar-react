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
      <Button variant='bg-black'>Login</Button>
    </form>
  )
};

export default FormLogin;