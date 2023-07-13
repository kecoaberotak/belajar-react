import InputForm from "../elements/input/Index";
import Button from "../elements/button/Button";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('email', event.target.email.value);
    localStorage.setItem('password', event.target.password.value);
    window.location.href = '/products '
  };

  return (
    <form onSubmit={handleLogin}>
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
      <Button variant='bg-blue-700 w-full' type='submit'>Login</Button>
    </form>
  )
};

export default FormLogin;