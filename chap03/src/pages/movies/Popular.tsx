import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import Card from '../../components/Card'
import { getMovies } from '../../hooks/useGetMovies'

// 단일 영화 데이터 인터페이스 정의
interface Movie {
  id: number
  title: string
  poster_path: string
}

const Popular = () => {
  // React Query를 사용하여 데이터 가져오기
  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['movies', 'popular'], // 캐싱 키
    queryFn: () => getMovies({ category: 'popular', pageParam: 1 }), // getMovies 함수 호출
    staleTime: 10 * 1000, // 10초 동안 데이터 신선 유지
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error fetching movies.</div>

  return (
    <Root>
      <h2>인기 있는</h2>
      <CardList>
        {movies?.results?.map((movie: Movie) => (
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

export default Popular

// styled-components
const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
`

const Root = styled.div``
