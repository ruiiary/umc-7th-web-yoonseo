import styled from 'styled-components'
import Card from '../../components/Card'
import useCustomFetch from '../../hooks/useCustomFetch'

// 단일 영화 데이터 인터페이스 정의
interface Movie {
  id: number
  title: string
  poster_path: string
}

// API 응답 형식 정의
interface MoviesResponse {
  results: Movie[]
}

const TopRated = () => {
  const { data, isLoading, isError } = useCustomFetch<MoviesResponse>(
    `${import.meta.env.VITE_MOVIE_API_URL}/movie/top_rated?language=en-US&page=1`
  )

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error occurred while fetching data</div>

  return (
    <Root>
      <h2>높은 평가를 받은</h2>
      <CardList>
        {data?.results.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
          />
        ))}
      </CardList>
    </Root>
  )
}

export default TopRated

// styled-components
const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
`

const Root = styled.div``
