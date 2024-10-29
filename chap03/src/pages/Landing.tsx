import styled from 'styled-components'
import { Link } from 'react-router-dom'

import img1 from '../assets/Landing1.svg'

// Root 컴포넌트
export const Root = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
`

// 이미지 스타일
export const Img = styled.img`
  padding: 0;
  margin: 0;
  width: 100%;
  height: auto;
  object-fit: cover;
`

// 버튼 스타일
export const Btn = styled.button`
  background: linear-gradient(92deg, #868df6, #4049f4);
  color: #ffffff;
  font-weight: bold;
  font-size: 1.15em;
  text-align: center;
  white-space: nowrap;
  border-radius: 100px;
  padding: 20px 14px;
  position: fixed;
  display: flex;
  align-items: center;
  left: 50%;
  bottom: 7%;
  transform: translateX(-50%);
  cursor: pointer;
  justify-content: center;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
  z-index: 10;

  &:focus {
    outline: none;
    border: none;
  }
`

// Landing 페이지 컴포넌트
const Landing = () => {
  return (
    <Root>
      <Img src={img1} />
      <Btn as={Link} to="/test">
        <div>티쳐핏 만나러 가기</div>
      </Btn>
    </Root>
  )
}

export default Landing
