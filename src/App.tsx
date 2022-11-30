import ProductList from './components/ProductList'
import ShopItem from './components/ShopItem'

function App() {
  return (
    <div>
      <h1>Shop List</h1>
      <ShopItem
        productList={[]}
        onClick={() => {
          console.log('add to basket')
        }}
        title='Fruit I need to buy'
      />
      <ShopItem
        productList={[]}
        onClick={() => {
          console.log('remove from basket')
        }}
        title='Fruit I have'
      />
    </div>
  )
}

export default App
