import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProductList from './ProductList'

const mockedFunction = jest.fn()

describe('<ProdutList/>', () => {
  it('should be empty', () => {
    render(<ProductList productList={[]} onClick={mockedFunction} />)
    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
  })

  it('renders apple and banana', () => {
    render(
      <ProductList
        productList={[
          { name: 'apple', inBasket: false },
          { name: 'banana', inBasket: false },
        ]}
        onClick={mockedFunction}
      />
    )
    const apple = screen.getByText('apple')
    const banana = screen.getByText('banana')

    expect(apple).toBeInTheDocument()
    expect(banana).toBeInTheDocument()
  })

  it('product apple should be click', async () => {
    render(
      <ProductList
        productList={[
          { name: 'apple', inBasket: false },
          { name: 'banana', inBasket: false },
        ]}
        onClick={mockedFunction}
      />
    )
    const apple = screen.getByText('apple')
    await userEvent.click(apple)

    expect(mockedFunction).toHaveBeenCalledTimes(1)
  })
})
