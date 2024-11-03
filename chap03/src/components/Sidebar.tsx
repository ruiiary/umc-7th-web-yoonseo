import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { IoHome } from 'react-icons/io5'
import { MdLocalMovies } from 'react-icons/md'

const Sidebar = () => {
  const icon_st = { marginRight: '6px', paddingTop: '3px' }
  return (
    <nav>
      <Wrapper>
        <Link to={'/'}>
          <Button>
            <IoHome style={icon_st} />홈
          </Button>
        </Link>
        <Link to={'/search'}>
          <Button>
            <FaSearch style={icon_st} />
            찾기
          </Button>
        </Link>
        <Link to="/movies">
          <Button>
            <MdLocalMovies style={icon_st} />
            영화
          </Button>
        </Link>
      </Wrapper>
    </nav>
  )
}

export default Sidebar

// styled-components
const Wrapper = styled.div`
  width: 10%;
  white-space: wrap;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 30px;
`

const Button = styled.button`
  width: 100%;
  color: #ffffff;
  background-color: #0e0e0e;
  white-space: nowrap;
  font-size: 17px;
  gap: 1px;
  margin: 5px;
`
