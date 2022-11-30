import { renderHook, act } from '@testing-library/react'
import { initialShopList, useShopList } from './useShopList'

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
      result.current.onProductClick(tomato.name)
    })

    expect(result.current.productsToBuy).toEqual(restShopList)
    expect(result.current.productsInBasket).toEqual([
      { ...tomato, inBasket: true },
    ])
  })

  it('should return empty productsInBasket and productsToBuy with defauls', () => {
    const { result } = renderHook(() => useShopList())
    const [tomato, ...restShopList] = initialShopList
    const newProductsToBuy = [...restShopList, tomato]

    // add product to Basket
    act(() => {
      result.current.onProductClick(tomato.name)
    })
    // remove product to Basket
    act(() => {
      result.current.onProductClick(tomato.name)
    })

    expect(result.current.productsToBuy).toEqual(newProductsToBuy)
    expect(result.current.productsInBasket).toEqual([])
  })
})
