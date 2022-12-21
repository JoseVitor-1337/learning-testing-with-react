import { render, screen /* logRoles*/ } from '@testing-library/react'
import PersonSkills from '.'

describe('PersonSkills', () => {
  const skills = ['HTMl', 'CSS', 'Javascript', 'React']

  test('Should render with props', () => {
    render(<PersonSkills skills={skills} />)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })

  test('Should render a list of skills based os props.skills', () => {
    render(<PersonSkills skills={skills} />)
    const listItemElements = screen.getAllByRole('listitem')
    expect(listItemElements).toHaveLength(skills.length)
    listItemElements.forEach((listItem, index) => {
      expect(listItem).toHaveTextContent(skills[index])
    })
  })

  test('Should render connect button', () => {
    render(<PersonSkills skills={skills} />)
    const connectButtonElement = screen.getByRole('button', {
      name: 'Connect',
    })
    expect(connectButtonElement).toBeInTheDocument()
  })

  test('Should not render desconnect button, use queryBy or queryAllBy', () => {
    render(<PersonSkills skills={skills} />)
    const connectButtonElement = screen.queryByRole('button', {
      name: 'Desconnect',
    })
    expect(connectButtonElement).not.toBeInTheDocument()
  })

  test('Should render connect button after 2 second using findBy or findAllBy', async () => {
    render(<PersonSkills skills={skills} />)

    // const element = render(<PersonSkills skills={skills} />);

    // logRoles(element.container);

    // screen.debug();

    const connectButtonElement = await screen.findByRole(
      'button',
      {
        name: 'Desconnect',
      },
      { timeout: 2000 }
    )
    expect(connectButtonElement).toBeInTheDocument()
  })
})
