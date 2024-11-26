import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getMovieDetail, getMovieCredits } from '../../hooks/api'

interface MovieDetail {
  title: string
  poster_path: string
  overview: string
  vote_average: number
  runtime: number
  release_date: string
}

interface CastMember {
  id: number
  name: string
  character: string
  profile_path: string
}

const DetailPage = () => {
  const { movieId } = useParams<{ movieId: string }>()

  // 영화 상세 정보 가져오기
  const {
    data: movie,
    isLoading: isLoadingMovie,
    isError: isErrorMovie,
  } = useQuery<MovieDetail>({
    queryKey: ['movie', movieId],
    queryFn: () => getMovieDetail(movieId!),
    staleTime: 5 * 60 * 1000,
  })

  // 출연진 정보 가져오기
  const {
    data: credits,
    isLoading: isLoadingCredits,
    isError: isErrorCredits,
  } = useQuery<{ cast: CastMember[] }>({
    queryKey: ['credits', movieId],
    queryFn: () => getMovieCredits(movieId!),
    staleTime: 5 * 60 * 1000,
  })

  if (isLoadingMovie || isLoadingCredits)
    return <div>Loading movie details...</div>
  if (isErrorMovie || isErrorCredits)
    return <div>Error loading movie details...</div>

  const year = movie?.release_date
    ? new Date(movie.release_date).getFullYear()
    : 'N/A'

  return (
    <MovieContainer>
      <MovieImageWrapper>
        <MovieImage
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt={movie?.title}
        />
        <GradientOverlay />
        <MovieInfoOverlay>
          <MovieTitle>{movie?.title}</MovieTitle>
          <P>평점: {movie?.vote_average}</P>
          <P>개봉 연도: {year}</P>
          <P>상영 시간: {movie?.runtime}분</P>
          <p>{movie?.overview}</p>
        </MovieInfoOverlay>
      </MovieImageWrapper>
      <StyledH1>감독/출연</StyledH1>
      <CastList>
        {credits?.cast.slice(0, 24).map((member) => (
          <CastMemberCard key={member.id}>
            <CastImage
              src={
                member.profile_path
                  ? `https://image.tmdb.org/t/p/w185${member.profile_path}`
                  : 'https://via.placeholder.com/185x278?text=No+Image'
              }
              alt={member.name}
            />
            <CastName>{member.name}</CastName>
            <CastCharacter>{member.character}</CastCharacter>
          </CastMemberCard>
        ))}
      </CastList>
    </MovieContainer>
  )
}

export default DetailPage

// styled-components
const MovieContainer = styled.div`
  background-color: black;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 20px;
  color: white;
`

const MovieImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 380px;
`

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
  z-index: 1;
`

const MovieInfoOverlay = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  z-index: 2;
  max-width: 60%;

  h1 {
    font-size: 45px;
    margin: 0 0 20px;
  }

  p {
    margin: 5px 0;
    font-size: 14px;
  }
`

const MovieTitle = styled.h1`
  font-size: 45px;
  margin-bottom: 20px;
`

const P = styled.p`
  margin: 5px 0;
  font-size: 14px;
  font-weight: bold;
`

const StyledH1 = styled.h1`
  font-size: 24px;
  margin-top: 35px;
  margin-bottom: 20px;
  padding-left: 20px;
  color: white;
`

const CastList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
  justify-content: left;
`

const CastMemberCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
`

const CastImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 8px;
`

const CastName = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`

const CastCharacter = styled.p`
  font-size: 12px;
  color: #b0b0b0;
  text-align: center;
`
