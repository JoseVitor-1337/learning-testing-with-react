import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import Counter from '.'

describe('Counter', () => {
  user.setup()

  test('Should render', () => {
    render(<Counter />)
    const headingCount = screen.getByRole('heading')
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })

    expect(headingCount).toBeInTheDocument()
    expect(incrementButton).toBeInTheDocument()
  })

  test('Should render with counter 10', () => {
    render(<Counter initialCount={10} />)
    const headingCount = screen.getByRole('heading')
    expect(headingCount).toHaveTextContent('10')
  })

  test('Should counter equal to 11 after increment 1', async () => {
    render(<Counter initialCount={10} />)
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    await user.click(incrementButton)
    const headingCount = screen.getByRole('heading')
    expect(headingCount).toHaveTextContent('11')
  })

  test('Should counter equal to 2 after click increment button twice', async () => {
    render(<Counter />)
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    await user.click(incrementButton)
    await user.click(incrementButton)
    const headingCount = screen.getByRole('heading')
    expect(headingCount).toHaveTextContent('2')
  })

  test('Should ounter equal to 0 with initialCount 1000, but simulate click on reset button', async () => {
    render(<Counter initialCount={1000} />)
    const resetButton = screen.getByRole('button', {
      name: 'Reset',
    })
    await user.click(resetButton)
    const headingCount = screen.getByRole('heading')
    expect(headingCount).toHaveTextContent('0')
  })

  test('Should counter equal to 10 after set input value to 10 and click in the set amount to add into count', async () => {
    render(<Counter />)
    const amountInput = screen.getByRole('spinbutton')
    const setAmountButton = screen.getByRole('button', {
      name: 'Set amount',
    })

    await user.type(amountInput, '10')
    await user.click(setAmountButton)

    const headingCount = screen.getByRole('heading')

    expect(amountInput).toHaveValue(10)
    expect(headingCount).toHaveTextContent('10')
  })

  test('Should check elements ared focused in the right order by simulate tab() event', async () => {
    render(<Counter />)
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    const resetButton = screen.getByRole('button', {
      name: 'Reset',
    })
    const setAmountButton = screen.getByRole('button', {
      name: 'Set amount',
    })
    const amountInput = screen.getByRole('spinbutton')

    await user.tab()
    expect(incrementButton).toHaveFocus()
    await user.tab()
    expect(resetButton).toHaveFocus()
    await user.tab()
    expect(amountInput).toHaveFocus()
    await user.tab()
    expect(setAmountButton).toHaveFocus()
  })
})
