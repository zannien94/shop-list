import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProductListItem from './ProductListItem'

const mockedFunction = jest.fn()

describe('ProdutListItem/>', () => {
  it('renders click text', () => {
    render(<ProductListItem text='click' onClick={mockedFunction} />)
    const listItem = screen.getByRole('listitem')
    expect(listItem).toHaveTextContent('click')
  })
  it('should run onClick once', async () => {
    render(<ProductListItem text='click' onClick={mockedFunction} />)
    const listItem = screen.getByRole('listitem')
    await userEvent.click(listItem)
    expect(mockedFunction).toHaveBeenCalledTimes(1)
  })
})
