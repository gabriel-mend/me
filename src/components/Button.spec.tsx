import { render, screen } from '@/tests/utils'
import { Button } from './Button'

describe('Button', () => {
  it('should button', () => {
    render(<Button>Testando</Button>)

    expect(screen.getByText('Testando')).toBeDefined()
  })
})
