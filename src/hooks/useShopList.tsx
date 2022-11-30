import { useState } from 'react'
import { IProduct } from '../interfaces'

interface IUseShopList {
  productsToBuy: IProduct[]
  productsInBasket: IProduct[]
  onProductClick(name: string): void
}

export const initialShopList = [
  { name: 'tomato', inBasket: false },
  { name: 'kiwi', inBasket: false },
  { name: 'apple', inBasket: false },
  { name: 'banana', inBasket: false },
  { name: 'pamelo', inBasket: false },
]

export const useShopList = (initialState = initialShopList): IUseShopList => {
  const [productList, setProductList] = useState<IProduct[]>(initialState)

  const productsToBuy = productList.filter((product) => !product.inBasket)
  const productsInBasket = productList.filter((product) => product.inBasket)

  const onProductClick = (name: string): void => {
    const productIndex = productList.findIndex(
      (product) => product.name === name
    )
    const updateProductList = [...productList]
    const product = {
      ...updateProductList[productIndex],
      inBasket: !updateProductList[productIndex].inBasket,
    }
    updateProductList.splice(productIndex, 1)
    updateProductList.push(product)

    setProductList(updateProductList)
  }

  return { productsToBuy, productsInBasket, onProductClick }
}
