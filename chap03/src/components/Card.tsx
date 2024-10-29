import React, { useState } from 'react'
import styled from 'styled-components'

export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/'

interface CardProps {
  title: string
  poster_path: string
}

export default function Card({ title, poster_path }: CardProps) {
  const [hide, setHide] = useState(true)

  const handleMouseOver = () => setHide(false)
  const handleMouseOut = () => setHide(true)

  return (
    <MovieContainer onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <MoviePoster src={IMG_BASE_URL + poster_path} alt={`${title} 포스터`} />
      {!hide && (
        <Info>
          <Title>{title}</Title>
        </Info>
      )}
    </MovieContainer>
  )
}

// styled-components
const MovieContainer = styled.div`
  width: 150px;
  margin: 10px;
  position: relative;
`

const MoviePoster = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`

const Info = styled.div`
  width: 100%;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px;
  border-radius: 8px;
  position: absolute;
  bottom: 0;
  text-align: center;
`

const Title = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 14px;
`
