//import { useEffect, useState } from 'react'
//import axios, { AxiosResponse } from 'axios'
import styled from 'styled-components'
import Card from '../components/Card'
//import axiosInstance from '../apis/axios-instance.ts'
import useCustomFetch from '../hooks/useCustomFetch.ts'

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

const HomePage = () => {
  const { data, isLoading, isError } = useCustomFetch<MoviesResponse>(
    `/movie/popular?language=en-US&page=1`
  )

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error occurred while fetching data</div>

  return (
    <CardList>
      {data?.results.map((movie: Movie) => (
        <Card
          key={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </CardList>
  )
}

export default HomePage

// styled-components
const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
`
