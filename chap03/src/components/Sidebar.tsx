import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Sidebar = () => {
  return (
    <nav>
      <Wrapper>
        <Link to={'/'}><Button>홈</Button></Link>
        <Link to={'/search'}><Button>찾기</Button></Link>
        <Link to="/movies"><Button>영화</Button></Link>
      </Wrapper>
    </nav>
  )
}

export default Sidebar

// styled-components
const Wrapper = styled.div`
  width: 10%;
  white-space: wrap;
`

const Button = styled.button`
  width: 100%;
  color: #ffffff;
  background-color: #0e0e0e;
  white-space: nowrap;
`
