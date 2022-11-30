import { IProduct } from '../../interfaces'
import ProductList from '../ProductList'

interface IShopItem {
  productList: IProduct[]
  onClick: (product: IProduct) => void
  title: string
}

const ShopItem = ({ productList, onClick, title }: IShopItem) => {
  return (
    <div>
      <h2>{title}</h2>
      <ProductList productList={productList} onClick={onClick} />
    </div>
  )
}
export default ShopItem
