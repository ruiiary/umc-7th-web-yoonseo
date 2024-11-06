import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const SignUpPage = () => {
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
    console.log('폼 데이터 제출', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register('email')} />
      <p style={{ color: 'red' }}>{errors.email?.message as string}</p>
      <input type="password" {...register('password')} />
      <p style={{ color: 'red' }}>{errors.password?.message as string}</p>
      <input type="submit" />
    </form>
  )
}

export default SignUpPage
