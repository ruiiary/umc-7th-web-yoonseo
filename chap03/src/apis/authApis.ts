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



// 유저정보 불러오기 api
export const getUserInfo = async () => {
  const AToken = localStorage.getItem('AToken');
  
  try {
    const response = await axiosInstance2.get("user/me", {
      headers: {
        Authorization: `Bearer ${AToken}`,
      },
    });
    console.log('응답 데이터:', response.data);
    return response.data;
  } catch (error) {
    console.error("유저 정보를 가져오지 못했습니다:", error);
  }
};

