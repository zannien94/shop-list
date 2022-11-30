import { AppWrapper, ProductsToBuy, ShopItemWrapper } from './App.styled'
import ShopItem from './components/ShopItem'
import { useShopList } from './hooks/useShopList'

function App() {
  const { productsToBuy, productsInBasket, onProductClick } = useShopList()
  return (
    <AppWrapper>
      <h1>Shop List</h1>
      <ShopItemWrapper>
        <ProductsToBuy
          productList={productsToBuy}
          onClick={onProductClick}
          title='Fruit I need to buy'
        />
        <ShopItem
          productList={productsInBasket}
          onClick={onProductClick}
          title='Fruit I have'
        />
      </ShopItemWrapper>
    </AppWrapper>
  )
}

export default App
