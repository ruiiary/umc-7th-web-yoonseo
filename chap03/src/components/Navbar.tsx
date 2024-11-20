import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { getUserInfo } from '../apis/authApis'

interface UserInfo {
  id: number
  email: string
}

const Navbar = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>() // 유저 정보 상태
  const [isLoading, setIsLoading] = useState(true) // 로딩 상태

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await getUserInfo() // 비동기 요청
        console.log(response)
        if (response) {
          setUserInfo(response)
        } // 유저 정보를 상태에 저장
      } catch (error) {
        console.error('유저 정보를 가져오는 중 오류 발생:', error)
        //setUserInfo("")
      } finally {
        setIsLoading(false) // 로딩 상태 해제
      }
    }
    fetchUserInfo()
  }, [])

  if (isLoading) {
    return <p>로딩 중...</p> // 로딩 중일 경우
  }

  return (
    <nav>
      <NavWrapper>
        <Link to={'/'}>
          <h2 style={{ color: '#896CFF' }}>LOGO</h2>
        </Link>

        {userInfo ? (
          <UserSection>
            <p>안녕하세요, {userInfo.email}님!</p>
            <LogoutButton>로그아웃</LogoutButton>
          </UserSection>
        ) : (
          <ButtonWrapper>
            <Link to={'/log-in'}>
              <Button>로그인</Button>
            </Link>
            <Link to="/sign-up">
              <Button style={{ backgroundColor: '#896CFF' }}>회원가입</Button>
            </Link>
          </ButtonWrapper>
        )}
      </NavWrapper>
    </nav>
  )
}

export default Navbar

// styled-components
const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
`

const Button = styled.button`
  border-radius: 20px;
  color: #ffffff;
  padding: 5px 10px;
  font-size: 14px;
  &:hover {
    background-color: #c2c7ff;
  }
`

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  p {
    margin: 0;
    font-size: 14px;
  }
`

const LogoutButton = styled.button`
  border-radius: 20px;
  background-color: #ff6b6b;
  color: #ffffff;
  padding: 5px 10px;
  font-size: 14px;
  &:hover {
    background-color: #ff8787;
  }
`
