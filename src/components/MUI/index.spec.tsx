import { render, screen } from '../../utils/test-custom-render'
import { MUIMode } from '.'

describe('MUIMode', () => {
  test('Should render heading text correctly', () => {
    render(<MUIMode />)

    const heading = screen.getByRole('heading')

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('dark mode')
  })
})
