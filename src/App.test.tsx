import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App/>', () => {
  it('should render app with 2 colums and products', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { name: 'Shop List' })
    const heading2 = screen.getByRole('heading', {
      name: 'Fruit I need to buy',
    })
    const heading3 = screen.getByRole('heading', { name: 'Fruit I have' })

    expect(heading).toBeInTheDocument()
    expect(heading2).toBeInTheDocument()
    expect(heading3).toBeInTheDocument()
  })
})
