interface IProductListItem {
  text: string
  onClick: () => void
}

const ProductListItem = ({ text, onClick }: IProductListItem) => {
  return <li onClick={onClick}>{text}</li>
}

export default ProductListItem
