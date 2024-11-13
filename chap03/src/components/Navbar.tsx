import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <nav>
      <NavWrapper>
        <Link to={'/'}>
          <h2 style={{ color: '#896CFF' }}>LOGO</h2>
        </Link>
        <ButtonWrapper>
          <Link to={'/log-in'}>
            <Button>로그인</Button>
          </Link>
          <Link to="/sign-up">
            <Button style={{ backgroundColor: '#896CFF' }}>회원가입</Button>
          </Link>
        </ButtonWrapper>
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
