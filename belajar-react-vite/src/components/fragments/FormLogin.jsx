import InputForm from "../elements/input/Index";
import Button from "../elements/button/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth-service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    
    const data = {
      username: event.target.username.value,
      password: event.target.password.value
    };
    login(data, (status, res) => {
      if(status){
        localStorage.setItem('token', res.data.token);
        window.location.href = '/products'
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm 
        label='Username' 
        type='text' 
        placeholder='Username' 
        name='username'
        ref={usernameRef}
      />
      <InputForm 
        label='Password' 
        type='password' 
        placeholder='******' 
        name='password' 
      />
      <Button variant='bg-blue-700 w-full' type='submit'>Login</Button>
      {loginFailed && <p className="text-red-500 mt-3 text-center">{loginFailed}</p>}
    </form>
  )
};

export default FormLogin;