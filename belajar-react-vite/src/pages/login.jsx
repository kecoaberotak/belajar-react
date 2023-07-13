import AuthLayout from "../components/layouts/AuthLayout";
import FormLogin from "../components/fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
      <FormLogin/>
    </AuthLayout>
  )
}

export default LoginPage;