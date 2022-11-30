import { Item } from './ProductListItem styles'
interface IProductListItem {
  text: string
  onClick: () => void
}

const ProductListItem = ({ text, onClick }: IProductListItem) => {
  return <Item onClick={onClick}>{text}</Item>
}

export default ProductListItem
