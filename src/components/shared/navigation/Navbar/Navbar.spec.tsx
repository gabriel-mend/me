import { render, screen } from '@/tests/utils'
import { Navbar } from './Navbar'

describe('Navbar Component', () => {
  it('should render correctly', () => {
    render(<Navbar />)

    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
