import React from 'react'
import styled from 'styled-components'

import image from '../../public/image.png'

// Props 타입 정의
interface CategoryCardProps {
  text: string
}

const CategoryCard: React.FC<CategoryCardProps> = ({ text }) => {
  // 타입 적용
  return (
    <CardWrapper>
      <img
        src={image}
        style={{ width: '200px', marginTop: '50px', marginRight: '10px' }}
      />
      <Text>{text}</Text>
    </CardWrapper>
  )
}

export default CategoryCard

const CardWrapper = styled.div`
  width: 100%;
`

const Text = styled.div`
  font-size: 16px;
  margin-top: 10px;
`
