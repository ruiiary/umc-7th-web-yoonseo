import { useEffect, useState } from 'react'


//  * useDebounce
//  * @param value - 디바운스할 입력 값
//  * @param delay - 디바운스 대기 시간 (ms)
//  * @returns 디바운스된 값

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // cleanup 함수: 다음 값이 들어오면 기존 타이머를 제거
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
