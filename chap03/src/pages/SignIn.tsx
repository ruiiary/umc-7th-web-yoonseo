import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import styled from 'styled-components'

const SignInPage = () => {
  const schema = z.object({
    email: z
      .string()
      .email('이메일 형식이 올바르지 않습니다.')
      .nonempty('이메일을 반드시 입력해주세요.'),
    password: z
      .string()
      .min(8, '비밀번호는 8자 이상이어야 합니다.')
      .max(16, '비밀번호는 16자 이하여야 합니다.')
      .nonempty('비밀번호를 반드시 입력해주세요.'),
  })

  // form data 타입 정의
  type FormData = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    console.log('로그인 데이터 제출', data)
  }

  return (
    <Root>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <H2>로그인</H2>
        <InputWrapper>
          <Input type="email" placeholder="Email" {...register('email')} />
          <p style={{ color: 'gray' }}>{errors.email?.message as string}</p>
        </InputWrapper>
        <InputWrapper>
          <Input
            type="password"
            placeholder="Password"
            {...register('password')}
          />
          <p style={{ color: 'gray' }}>{errors.password?.message as string}</p>
        </InputWrapper>
        <SubmitInput type="submit" value="Submit" />
      </Form>
    </Root>
  )
}

export default SignInPage

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh; /* 화면 높이 전체를 차지하여 수직 중심에 배치 */
`
const H2 = styled.h2`
  color: #ffffff;
  margin-bottom: 10px;
  font-size: 30px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  text-align: center;
`

const Input = styled.input`
  height: 40px;
  width: 300px;
`

const InputWrapper = styled.div`
  text-align: left;
`

const SubmitInput = styled(Input)`
  border-radius: 20px;
  margin-top: 10px;
  font-weight: bold;
  color: #ffffff;
  background-color: #896cff;
`
