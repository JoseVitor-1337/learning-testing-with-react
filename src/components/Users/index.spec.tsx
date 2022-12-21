import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { Users } from '.'
import { server } from '../../mocks/server'

describe('Users', () => {
  test('Should render', () => {
    render(<Users />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })

  test('Should render a list of a users', async () => {
    render(<Users />)
    const users = await screen.findAllByRole('listitem')
    expect(users).toHaveLength(2)
  })

  test('Should render a error in request', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/users',
        (request, response, context) => {
          return response(context.status(500))
        }
      )
    )
    render(<Users />)
    const errorText = await screen.findByText('Erro ao lista os usuários')
    expect(errorText).toBeInTheDocument()
  })
})
