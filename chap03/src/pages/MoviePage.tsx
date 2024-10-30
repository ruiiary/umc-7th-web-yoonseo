import styled from 'styled-components'
import CategoryCard from '../components/CategoryCard'
import { Link } from 'react-router-dom'

const MoviePage = () => {
  return (
    <>
      <Root>
        <h2>카테고리</h2>
        <CategoryWrapper>
          <Link to={'/now-playing'}>
            <CategoryCard text="현재 상영중인" />{' '}
          </Link>
          <Link to={'/popular'}>
            <CategoryCard text="인기 있는" />
          </Link>
          <Link to={'/top-rated'}>
            <CategoryCard text="높은 평가를 받은" />
          </Link>
          <Link to={'/up-coming'}>
            <CategoryCard text="개봉 예정인" />
          </Link>
        </CategoryWrapper>
      </Root>
    </>
  )
}

export default MoviePage

const CategoryWrapper = styled.div`
  display: flex;
`
const Root = styled.div``
