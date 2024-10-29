import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import styled from 'styled-components'

// 단일 영화 데이터 인터페이스 정의
interface Movie {
  id: number
  title: string
  overview: string
  // 필요한 경우 더 많은 필드를 추가
}

// API 응답 형식 정의
interface MoviesResponse {
  results: Movie[]
}

const MoviesPage = () => {
  // Movie 배열을 상태로 설정
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response: AxiosResponse<MoviesResponse> = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDU1NjNhMzNkMmI1NWNmY2VkYWYzMTU4ODI2NDVjYSIsIm5iZiI6MTczMDIxNDc0NC41OTM1MTEsInN1YiI6IjY3MDVlZDUwN2UzY2VlN2QzZjljYWUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TuK0GujmxFk3qIp1U9RcRy3wypCQHLLvp_Plw3DMaHo`,
            },
          }
        )
        setMovies(response.data.results) // results 배열을 상태로 설정
      } catch (error) {
        console.error('영화 데이터를 가져오는 중 오류 발생:', error)
      }
    }
    getMovies()
  }, [])

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          {/* <Card movie={movie} /> Card 컴포넌트를 사용 중일 경우 주석 해제 */}
        </div>
      ))}
    </div>
  )
}

export default MoviesPage
