import styled from 'styled-components'

const CustomButton = () => {
  return (
    <>
      <FirstStyledSweetPotato color={'purple'}>
        커스텀 버튼
      </FirstStyledSweetPotato>
      <FirstStyledSweetPotato color={'yellow'}>
        커스텀 버튼
      </FirstStyledSweetPotato>
    </>
  )
}

export default CustomButton

const FirstStyledSweetPotato = styled.button`
  border: none;
  padding: 0;
  cursor: pointer;
  color: #ffffff;
  background-color: ${(props) => props.color || 'purple'};

  &:hover {
    text-decoration: underline;
  }
`
