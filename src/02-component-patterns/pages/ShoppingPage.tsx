import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { Product } from '../interfaces/interfaces';
import { useState } from 'react';
import "../styles/custom-style.css"


const productContent = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}


const productContent2 = {
  id: '2',
  title: 'Coffee Mug - Meme',
  img: './coffee-mug2.png'
}

const products: Product[] = [productContent, productContent2]

interface ProductInCart extends Product {
  count: number
}


export const ShoppingPage = (): JSX.Element => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})


  const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
    setShoppingCart(prev => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = prev
        return { ...rest }
      }

      return {
        ...prev,
        [product.id]: { ...product, count }
      }
    })
  }

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

        {
          products.map(product => (
            <ProductCard
              onChange={onProductCountChange}
              key={product.id}
              product={product}
              className="bg-dark text-white"
              value={shoppingCart[product.id]?.count || 0}
            >
              <ProductImage style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }} className="custom-image" />
              <ProductTitle className=" text-bold" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>

          ))
        }
      </div>

      <div className='shopping-cart'>

        {
          Object.entries(shoppingCart)
            .map(([key, product]) => (
              <ProductCard
                onChange={onProductCountChange}
                key={key}
                style={{ width: "100px" }}
                product={product}
                className="bg-dark text-white"
                value={product.count}
              >
                <ProductImage style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }} className="custom-image" />
                <ProductButtons
                  className="custom-buttons"
                  style={{
                    display: "flex",
                    justifyContent: "center"
                  }}
                />
              </ProductCard>

            ))
        }

      </div>
    </div>
  )
}
