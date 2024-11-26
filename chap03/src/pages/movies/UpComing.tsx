import { useState } from 'react'
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

const UpComingWithPagination = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['movies', 'up-coming', currentPage],
    queryFn: () => getMovies({ category: 'upcoming', page: currentPage }),
    staleTime: 1000 * 60 * 5, // 5분 동안 데이터 신선 유지
  })

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1)
  }

  const handleNextPage = () => {
    if (data?.page && currentPage < data.total_pages)
      setCurrentPage((prev) => prev + 1)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error fetching movies. Please try again later.</div>
  }

  return (
    <Root>
      <h2>개봉 예정인</h2>
      <CardList>
        {data?.results.map((movie: Movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
          />
        ))}
      </CardList>
      <Pagination>
        <PaginationButton
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          isDisabled={currentPage === 1}
        >
          Previous
        </PaginationButton>
        <PageInfo>
          Page {currentPage} of {data?.total_pages}
        </PageInfo>
        <PaginationButton
          onClick={handleNextPage}
          disabled={currentPage === data?.total_pages}
          isDisabled={currentPage === data?.total_pages}
        >
          Next
        </PaginationButton>
      </Pagination>
    </Root>
  )
}

export default UpComingWithPagination

// styled-components
const Root = styled.div`
  padding: 20px;
`

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 16px;
`

const PaginationButton = styled.button<{ isDisabled: boolean }>`
  background-color: ${({ isDisabled }) => (isDisabled ? '#ccc' : '#007bff')};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  font-size: 16px;

  &:hover {
    background-color: ${({ isDisabled }) => (isDisabled ? '#ccc' : '#0056b3')};
  }
`

const PageInfo = styled.div`
  font-size: 16px;
  font-weight: bold;
`
