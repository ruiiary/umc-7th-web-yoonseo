import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import * as S from './LogInSignUp.style'
import { handleSignUp } from '../apis/authApis'

const SignUpPage = () => {
  const schema = z
    .object({
      email: z
        .string()
        .email('이메일 형식이 올바르지 않습니다.')
        .nonempty('이메일을 반드시 입력해주세요.'),
      password: z
        .string()
        .min(8, '비밀번호는 8자 이상이어야 합니다.')
        .max(16, '비밀번호는 16자 이하여야 합니다.')
        .nonempty('비밀번호를 반드시 입력해주세요.'),
      passwordCheck: z.string().nonempty('비밀번호를 다시 입력해주세요.'),
    })
    .refine((data) => data.password === data.passwordCheck, {
      message: '비밀번호가 일치하지 않습니다.',
      path: ['passwordCheck'],
    })

  // form data 타입 정의
  type FormData = z.infer<typeof schema>

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const CompleteSignUp = async (data: FormData) => {
    console.log('회원가입 데이터 확인', data)

    try {
      const response = await handleSignUp({
        email: data.email,
        password: data.password,
        passwordCheck: data.passwordCheck,
      })
      console.log('회원가입 완료', response)
      navigate('/log-in')
    } catch (error) {
      console.log('회원가입 중 오류', error)
    }
  }

  return (
    <S.Root>
      <S.Form onSubmit={handleSubmit(CompleteSignUp)}>
        <S.H2>회원가입</S.H2>
        <S.InputWrapper>
          <S.Input
            style={{ marginBottom: '5px' }}
            type="email"
            placeholder="이메일을 입력해 주세요"
            {...register('email')}
          />
          <p style={{ color: 'gray' }}>{errors.email?.message as string}</p>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Input
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            {...register('password')}
          />
          <p style={{ color: 'gray' }}>{errors.password?.message as string}</p>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Input
            type="password"
            placeholder="비밀번호를 다시 입력해 주세요"
            {...register('passwordCheck')}
          />
          <p style={{ color: 'gray' }}>
            {errors.passwordCheck?.message as string}
          </p>
        </S.InputWrapper>
        <S.SubmitButton type="submit" value="Submit">
          회원가입
        </S.SubmitButton>
      </S.Form>
    </S.Root>
  )
}

export default SignUpPage
