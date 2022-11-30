import ShopItem from './components/ShopItem'
import { useShopList } from './hooks/useShopList'

function App() {
  const { productsToBuy, productsInBasket, onProductClick } = useShopList()
  return (
    <div>
      <h1>Shop List</h1>
      <ShopItem
        productList={productsToBuy}
        onClick={onProductClick}
        title='Fruit I need to buy'
      />
      <ShopItem
        productList={productsInBasket}
        onClick={onProductClick}
        title='Fruit I have'
      />
    </div>
  )
}

export default App
