import AuthLayout from "../components/layouts/AuthLayout";
import FormLogin from "../components/fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
      <FormLogin/>
      <p className="text-sm mt-5 text-center">
        Dont have an account? <Link to="/register" className="font-bold text-blue-600">Sign up</Link>
      </p>
    </AuthLayout>
  )
}

export default LoginPage;