import { render, screen } from '@testing-library/react'
import ShopItem from './ShopItem'

const mockedFunction = jest.fn()

describe('<ShopItem/>', () => {
  it('should render shop item', () => {
    render(
      <ShopItem productList={[]} title='shop item' onClick={mockedFunction} />
    )
    const heading = screen.getByRole('heading', { name: 'shop item' })
    expect(heading).toBeInTheDocument()
  })
})
