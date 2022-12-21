import { render, screen } from '@testing-library/react'
import Greet from '.'

describe('Greet', () => {
  test('Should render', () => {
    render(<Greet />)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
  })

  test('Should render with a name props', () => {
    render(<Greet name="Vitor" />)
    const textElement = screen.getByText(/hello vitor/i)
    expect(textElement).toBeInTheDocument()
  })
})
