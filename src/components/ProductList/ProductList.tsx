import ProductListItem from '../ProductListItem'

interface IProduct {
  name: string
  inBasket: boolean
}
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
