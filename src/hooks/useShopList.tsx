import { useState } from 'react'

interface IProduct {
  name: string
  inBasket: boolean
}
interface IUseShopList {
  productsToBuy: IProduct[]
  productsInBasket: IProduct[]
  onProductClick(product: IProduct): void
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

  const onProductClick = ({ name, inBasket }: IProduct): void => {
    const productIndex = productList.findIndex(
      (product) => product.name === name
    )
    const updateProductList = [...productList]
    updateProductList[productIndex] = {
      ...updateProductList[productIndex],
      inBasket: !inBasket,
    }

    setProductList(updateProductList)
  }

  return { productsToBuy, productsInBasket, onProductClick }
}
