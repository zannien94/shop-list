import styled from 'styled-components'
import ShopItem from './components/ShopItem'

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 16px;
`
export const ShopItemWrapper = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid lightgrey;
`

export const ProductsToBuy = styled(ShopItem)`
  border-right: 1px solid lightgray;
  flex-grow: 2;
`
