import { render, screen } from '@testing-library/react'

const mockedFunction = jest.fn()

describe('<ShopItem/>', () => {
  it('should render shop item', () => {
    render(<ShopItem productList={[]} onClick={mockedFunction} />)
    const heading = screen.getByRole('heading', { name: 'shop item' })
    expect(heading).toBeInTheDocument()
  })
})
