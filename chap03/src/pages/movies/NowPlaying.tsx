import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import styled from 'styled-components'
import Card from '../../components/Card'

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

const NowPlaying = () => {
  // Movie 배열을 상태로 설정
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response: AxiosResponse<MoviesResponse> = await axios.get(
          `${import.meta.env.VITE_MOVIE_API_URL}/movie/now_playing?language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_MY_API}`,
            },
          }
        )
        setMovies(response.data.results)
      } catch (error) {
        console.error('영화 데이터를 가져오는 중 오류 발생:', error)
      }
    }
    getMovies()
  }, [])

  return (
    <Root>
      <h2>현재 상영 중인</h2>
      <CardList>
        {movies.map((movie) => (
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

export default NowPlaying

// styled-components
const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
`
const Root = styled.div``
