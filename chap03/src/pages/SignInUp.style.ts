import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  justify-content: center;
  transform: translateX(-80px);
  align-items: center;
  height: 70vh; 
`
export const H2 = styled.h2`
  color: #ffffff;
  margin-bottom: 10px;
  font-size: 30px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  text-align: center;
`

export const Input = styled.input`
  height: 40px;
  width: 300px;
`

export const InputWrapper = styled.div`
  text-align: left;
`

export const SubmitInput = styled(Input)`
  border-radius: 20px;
  margin-top: 10px;
  font-weight: bold;
  color: #ffffff;
  background-color: #896cff;
`
