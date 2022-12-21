import { render, screen } from '@testing-library/react'
import { JobForm } from '.'

describe('JobForm', () => {
  it('Should render all inputs from form by type and name', () => {
    render(<JobForm />)

    const inputNameElement = screen.getByRole('textbox', {
      name: 'Trabalho',
    })
    const textareaNameElement = screen.getByRole('textbox', {
      name: 'Experiência',
    })

    const selectPlaceElement = screen.getByRole('combobox')
    const checkboxElement = screen.getByRole('checkbox')
    const submitButtonElement = screen.getByRole('button')

    expect(inputNameElement).toBeInTheDocument()
    expect(textareaNameElement).toBeInTheDocument()
    expect(selectPlaceElement).toBeInTheDocument()
    expect(checkboxElement).toBeInTheDocument()
    expect(submitButtonElement).toBeInTheDocument()
    expect(submitButtonElement).toHaveAttribute('type', 'submit')
    expect(submitButtonElement).toBeDisabled()
  })

  it('Should render headings', () => {
    render(<JobForm />)

    const pageMainHeading = screen.getByRole('heading', {
      level: 1,
    })

    const pageSecondHeading = screen.getByRole('heading', {
      level: 2,
    })

    expect(pageMainHeading).toBeInTheDocument()
    expect(pageSecondHeading).toBeInTheDocument()
  })

  it('Should render input name, check by placeholder', () => {
    render(<JobForm />)

    const inputElement = screen.getByPlaceholderText('Nome completo')

    expect(inputElement).toBeInTheDocument()
  })

  it('Should render paragraph, check by textContent', () => {
    render(<JobForm />)

    const paragraphElement = screen.getByText('dados corretos.', {
      exact: false,
    })

    expect(paragraphElement).toBeInTheDocument()
  })

  it('Should render input and textaream, check by values passed', () => {
    render(<JobForm />)

    const inputElement = screen.getByDisplayValue(/vitor/i)
    const textareaElement = screen.getByDisplayValue(/programador/i)

    expect(inputElement).toBeInTheDocument()
    expect(textareaElement).toBeInTheDocument()
  })

  it('Should render a image, check by his alt text', () => {
    render(<JobForm />)

    const imgElement = screen.getByAltText((content) => {
      return content.startsWith('Avatar')
    })

    expect(imgElement).toBeInTheDocument()
  })

  it('Should render paragraph, check by title attribute', () => {
    render(<JobForm />)

    const paragraphElement = screen.getByTitle(/importante/)

    expect(paragraphElement).toBeInTheDocument()
  })

  it('Should render form, check by data-testid attribute', () => {
    render(<JobForm />)

    const formElement = screen.getByTestId('job-form')

    expect(formElement).toBeInTheDocument()
  })
})
