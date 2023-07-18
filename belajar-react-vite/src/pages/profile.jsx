import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();

  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{username}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Selamat Datang
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;