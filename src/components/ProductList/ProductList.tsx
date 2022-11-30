import { IProduct } from '../../interfaces'
import ProductListItem from '../ProductListItem'

interface IProductList {
  productList: IProduct[]
  onClick: (product: IProduct) => void
}

const ProductList = ({ productList, onClick }: IProductList) => {
  return (
    <div>
      <ul>
        {productList.map(({ name, inBasket }) => (
          <ProductListItem
            text={name}
            key={name}
            onClick={() => onClick({ name, inBasket })}
          />
        ))}
      </ul>
    </div>
  )
}
export default ProductList
