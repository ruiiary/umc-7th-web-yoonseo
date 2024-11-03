import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axiosInstance from '../../apis/axios-instance'

interface MovieDetail {
  title: string
  poster_path: string
  overview: string
  vote_average: number
  runtime: number
  release_date: string
}

const DetailPage = () => {
  const { movieId } = useParams<{ movieId: string }>()
  const [movie, setMovie] = useState<MovieDetail | null>(null)

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axiosInstance.get(`/movie/${movieId}`)
        setMovie(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchMovieDetails()
  }, [movieId])

  if (!movie) return <div>Loading movie details...</div>

  const year = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : 'N/A'

  return (
    <MovieContainer>
      <MovieImage
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <GradientOverlay />
      <MovieInfo>
        <MovieTitle style={{ fontSize: '45px', marginBottom: '70px' }}>
          {movie.title}
        </MovieTitle>
        <P>평점: {movie.vote_average}</P>
        <P>개봉 연도: {year}</P>
        <P style={{ marginBottom: '15px' }}>상영 시간: {movie.runtime}분</P>
        <p>{movie.overview}</p>
      </MovieInfo>
    </MovieContainer>
  )
}

export default DetailPage

const MovieContainer = styled.div`
  position: relative;
  width: 100%;
  height: 380px;
  overflow: hidden;
`

const MovieTitle = styled.h1``

const MovieImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
`

const MovieInfo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  bottom: 20px;
  color: white;
  z-index: 1;

  h1 {
    font-size: 24px;
    margin: 0;
  }

  p {
    margin: 5px 0;
    font-size: 14px;
    width: 50%;
  }
`

const P = styled.p`
  margin: 5px 0;
  font-size: 14px;
  width: 50%;
  font-weight: bold;
`
