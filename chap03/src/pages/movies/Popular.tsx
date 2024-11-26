import { useInfiniteQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import Card from '../../components/Card'
import { getMovies } from '../../hooks/useGetMovies'

const Popular = () => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['movies', 'popular'],
      queryFn: ({ pageParam = 1 }) =>
        getMovies({ category: 'popular', pageParam }),
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
      <h2>인기 있는</h2>
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

export default Popular

// styled-components
const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
`

const Root = styled.div``

const LoadMoreButton = styled.button`
  margin: 20px auto;
  display: block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`
