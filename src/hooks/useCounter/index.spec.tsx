import { renderHook, act } from '@testing-library/react'

import { useCounter } from '.'

describe('useCounter', () => {
  test('should render the initial count', () => {
    const { result } = renderHook(useCounter)
    expect(result.current.count).toBe(0)
  })

  test('should render the same initial count by passing the parameter', () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCounter: 10,
      },
    })
    expect(result.current.count).toBe(10)
  })

  test('Should increment the counter', () => {
    const { result } = renderHook(useCounter)
    act(() => result.current.increment())
    expect(result.current.count).toBe(1)
  })

  test('Should decrement the counter', () => {
    const { result } = renderHook(useCounter)
    act(() => result.current.decrement())
    expect(result.current.count).toBe(-1)
  })
})
