import { useState } from "react"
import { OnChangeArgs, ProductInCart } from "../interfaces/interfaces"




const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})
  const onProductCountChange = ({ count, product }: OnChangeArgs) => {

    setShoppingCart(oldShoppingCart => {

      const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 }

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count
        return {
          ...oldShoppingCart,
          [product.id]: productInCart
        }
      }

      const { [product.id]: toDelete, ...rest } = oldShoppingCart
      return { ...rest }

    })
  }

  return {
    shoppingCart,
    onProductCountChange
  }

}

export default useShoppingCart
