import { render, screen } from '@/tests/utils'
import { ReactNode } from 'react'
import { Navbar } from './Navbar'

vi.mock('next/link')

vi.mock('next/image')

describe('Navbar Component', () => {
  it('should render correctly', () => {
    render(<Navbar />)
    const logo = screen.getByRole('img')
    const navigation = screen.getByRole('navigation')
    const translate = screen.getByRole('combobox')

    expect(logo).toBeInTheDocument()
    expect(navigation).toBeInTheDocument()
    expect(translate).toBeInTheDocument()
  })

  it('should render links', () => {
    render(<Navbar />)
    const link = screen.getByRole('link', { name: /about/i })

    expect(link).toBeInTheDocument()
  })
})
