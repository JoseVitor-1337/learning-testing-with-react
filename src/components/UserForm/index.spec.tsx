import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { UserForm } from '.'

describe('UserForm', () => {
  test('Should dispathc a upload in file input and render a <img /> with that file', async () => {
    render(<UserForm />)

    const file = new File(['(⌐□_□)'], 'hello.png', { type: 'image/png' })
    const inputFile = screen.getByLabelText(/Suas imagens/)
    await user.upload(inputFile, file)
    const dinamicImg = screen.queryByAltText(file.name)

    expect(dinamicImg).toBeInTheDocument()
  })

  test('Should change civil-state select value to option divorced', async () => {
    render(<UserForm />)

    const select = screen.getByLabelText('Estado civil')

    const singleOption = screen.getByRole('option', {
      name: 'Solteiro',
    }) as HTMLOptionElement

    const divorcedOption = screen.getByRole('option', {
      name: 'Divorciado',
    }) as HTMLOptionElement

    await user.selectOptions(select, 'divorced')

    expect(select).toBeInTheDocument()
    expect(singleOption.selected).toBe(false)
    expect(divorcedOption.selected).toBe(true)
  })
})
