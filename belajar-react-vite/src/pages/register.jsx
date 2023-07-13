import AuthLayout from "../components/layouts/AuthLayout";
import FormRegister from "../components/fragments/FormRegister";

const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
      <FormRegister/>
    </AuthLayout>
  );
};

export default RegisterPage;