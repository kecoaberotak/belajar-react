import AuthLayout from "../components/layouts/AuthLayout";
import FormRegister from "../components/fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
      <FormRegister/>
      <p className="text-sm mt-5 text-center">
        Already have an account? <Link to="/login" className="font-bold text-blue-600">Login</Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;