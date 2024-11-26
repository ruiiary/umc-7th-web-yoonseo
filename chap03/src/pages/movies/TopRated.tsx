import { useInfiniteQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import Card from '../../components/Card'
import { getMovies } from '../../hooks/useGetMovies'

// 단일 영화 데이터 인터페이스 정의
interface Movie {
  id: number
  title: string
  poster_path: string
}

const TopRated = () => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['movies', 'top-rated'],
      queryFn: ({ pageParam = 1 }) =>
        getMovies({ category: 'top_rated', pageParam }),
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage.page + 1
        return nextPage <= lastPage.total_pages ? nextPage : undefined
      },
      initialPageParam: 1,
    })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error fetching movies. Please try again later.</div>
  }

  return (
    <Root>
      <h2>Top Rated</h2>
      <CardList>
        {data?.pages.map((page) =>
          page.results.map((movie) => (
            <Card
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
            />
          ))
        )}
      </CardList>
      {hasNextPage && (
        <LoadMoreButton onClick={() => fetchNextPage()}>
          Load More
        </LoadMoreButton>
      )}
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
