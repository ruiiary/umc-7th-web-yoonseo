import axiosInstance2 from './axios-instance2';

// 회원가입 api
interface SignUpProps {
  email: string;
  password: string;
  passwordCheck: string;
}

export const handleSignUp = async (requestData: SignUpProps) => {
  const response = await axiosInstance2.post("auth/register", requestData);
  return response.data;
}

// 로그인 api
interface LogInProps {
  email: string;
  password: string;
}

export const handleLogin = async (requestData: LogInProps) => {
  const response = await axiosInstance2.post("auth/login", requestData);
  return response.data;
}

