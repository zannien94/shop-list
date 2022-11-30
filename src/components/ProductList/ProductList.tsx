import { IProduct } from '../../interfaces'
import ProductListItem from '../ProductListItem'
import { ProductListWrapper } from './ProductList styled'

interface IProductList {
  productList: IProduct[]
  onClick: (product: IProduct) => void
}

const ProductList = ({ productList, onClick }: IProductList) => {
  return (
    <ProductListWrapper>
      {productList.map(({ name, inBasket }) => (
        <ProductListItem
          text={name}
          key={name}
          onClick={() => onClick({ name, inBasket })}
        />
      ))}
    </ProductListWrapper>
  )
}
export default ProductList
