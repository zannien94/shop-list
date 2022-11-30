import { IProduct } from '../../interfaces'
import ProductList from '../ProductList'
import {
  ShopItemContent,
  ShopItemTitle,
  ShopListWrapper,
} from './ShopItem.styles'

interface IShopItem {
  productList: IProduct[]
  onClick: (product: IProduct) => void
  title: string
  className?: string
}

const ShopItem = ({ productList, onClick, title, className }: IShopItem) => {
  return (
    <ShopListWrapper className={className}>
      <ShopItemTitle>{title}</ShopItemTitle>
      <ShopItemContent>
        <ProductList productList={productList} onClick={onClick} />
      </ShopItemContent>
    </ShopListWrapper>
  )
}
export default ShopItem
