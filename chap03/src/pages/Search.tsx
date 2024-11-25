import styled from 'styled-components'
import { Link, useSearchParams } from 'react-router-dom'
import Card from '../components/Card'
import useCustomFetch from '../hooks/useCustomFetch.ts'
import { FaSearch } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { useDebounce } from '../hooks/useDebounce' // 커스텀 훅 import

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

const icon_st = {
  marginRight: '6px',
  paddingTop: '3px',
  width: '16px',
  height: '16px',
}

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState('') // 입력 상태
  const debouncedSearchValue = useDebounce(searchValue, 500) // 커스텀 훅 사용
  const [query, setQuery] = useState('')
  const [searchParams, setSearchParams] = useSearchParams({ mq: '' })

  const mq = searchParams.get('mq') || ''

  // 디바운스된 값으로 검색어 업데이트
  useEffect(() => {
    if (debouncedSearchValue && debouncedSearchValue !== mq) {
      setQuery(debouncedSearchValue)
      setSearchParams({ mq: debouncedSearchValue })
      //navigate(`search?mq=${debouncedSearchValue}`)
    }
  }, [debouncedSearchValue, mq, setSearchParams])

  // 입력 값 변경 처리
  const onChangeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const handleSearchMovieWithKeyBoard = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Enter') {
      setQuery(searchValue) // Enter를 눌렀을 때 즉시 검색
      setSearchParams({ mq: searchValue })
    }
  }

  const url = `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`

  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch<MoviesResponse>(url)
  console.log(movies)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error occurred while fetching data</div>

  return (
    <>
      <FlexContainer>
        <StyledInput
          placeholder="검색어를 입력해 주세요"
          value={searchValue}
          onChange={onChangeSearchValue}
          onKeyDown={handleSearchMovieWithKeyBoard} // Enter 키 이벤트 처리
        ></StyledInput>
        <button onClick={() => setQuery(searchValue)}>
          <FaSearch style={icon_st} />
        </button>
      </FlexContainer>

      <CardList>
        {movies?.results.map((movie: Movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <Card title={movie.title} poster_path={movie.poster_path} />
          </Link>
        ))}
      </CardList>
    </>
  )
}

export default SearchPage

// styled-components
const FlexContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
  text-align: left;
  justify-content: center;
  transform: translateX(-30px);
`

const StyledInput = styled.input`
  width: 40%;
  background-color: rgba(1000, 1000, 1000, 0.3);
  border-radius: 20px;
  border: 0;
  height: 35px;
  margin-right: 10px;
  padding-left: 20px;
`

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
  margin-left: 20px;
`
