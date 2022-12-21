import { useState } from 'react'

type UseCounterReturn = {
  count: number
  increment: () => void
  decrement: () => void
}

type UseCounterParams = {
  initialCounter: number
}

type IUseCounter = (params?: UseCounterParams) => UseCounterReturn

export const useCounter: IUseCounter = (params = { initialCounter: 0 }) => {
  const [count, setCount] = useState(params.initialCounter)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return { count, increment, decrement }
}
