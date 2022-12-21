import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { AppProvider } from '../context/Application/Provider'

const customRender = (
  component: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(component, { wrapper: AppProvider, ...options })

export * from '@testing-library/react'

export { customRender as render }
