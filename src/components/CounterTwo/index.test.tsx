import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { CounterTwo } from '.'

describe('CounterTwo', () => {
  user.setup()

  test('Should render', () => {
    render(<CounterTwo />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })

  test('Should render with the incrementButton and call handleIncrement() function once', async () => {
    const mockHandleIncrement = jest.fn()

    render(<CounterTwo count={0} handleIncrement={mockHandleIncrement} />)
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    await user.click(incrementButton)
    expect(incrementButton).toBeInTheDocument()
    expect(mockHandleIncrement).toBeCalledTimes(1)
  })

  test('Should render with the decrementButton and call handleDecrement() function once', async () => {
    const mockHandleDecrement = jest.fn()

    render(<CounterTwo count={0} handleDecrement={mockHandleDecrement} />)
    const DecrementButton = screen.getByRole('button', {
      name: 'Decrement',
    })
    await user.click(DecrementButton)
    expect(DecrementButton).toBeInTheDocument()
    expect(mockHandleDecrement).toBeCalledTimes(1)
  })
})
