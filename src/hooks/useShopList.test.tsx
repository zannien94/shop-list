import { renderHook, act } from '@testing-library/react'

const initialShopList = [
  { name: 'tomato', inBasket: false },
  { name: 'kiwi', inBasket: false },
  { name: 'apple', inBasket: false },
  { name: 'banana', inBasket: false },
  { name: 'pamelo', inBasket: false },
]
describe('useShopList', () => {
  it('should return defaults', () => {
    const { result } = renderHook(() => useShopList())
    expect(result.current.productsToBuy).toEqual(initialShopList)
    expect(result.current.productsInBasket).toEqual([])
  })

  it('should return one product in productsInBasket and rest in productsToBuy ', () => {
    const { result } = renderHook(() => useShopList())
    const [tomato, ...restShopList] = initialShopList

    act(() => {
      result.current.onProductClick(tomato)
    })

    expect(result.current.productsToBuy).toEqual(restShopList)
    expect(result.current.productsInBasket).toEqual([
      { ...tomato, inBasket: true },
    ])
  })

  it('should return empty productsInBasket and productsToBuy with defauls', () => {
    const { result } = renderHook(() => useShopList())
    const [tomato] = initialShopList

    act(() => {
      result.current.onProductClick(tomato)
    })
    expect(result.current.productsToBuy).toEqual(initialShopList)
    expect(result.current.productsInBasket).toEqual([])
  })
})
