import { IProduct } from '../../interfaces'
import ProductListItem from '../ProductListItem'
import { ProductListWrapper } from './ProductList styled'

interface IProductList {
  productList: IProduct[]
  onClick: (name: string) => void
}

const ProductList = ({ productList, onClick }: IProductList) => {
  return (
    <ProductListWrapper>
      {productList.map(({ name }) => (
        <ProductListItem text={name} key={name} onClick={() => onClick(name)} />
      ))}
    </ProductListWrapper>
  )
}
export default ProductList
