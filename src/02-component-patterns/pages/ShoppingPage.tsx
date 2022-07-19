import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import "../styles/custom-style.css"
import { products } from '../data/products';
import useShoppingCart from '../hooks/useShoppingCart';



export const ShoppingPage = (): JSX.Element => {

  const { shoppingCart, onProductCountChange } = useShoppingCart()

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
              <ProductImage
                style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
                className="custom-image"
              />
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
                <ProductImage
                  style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
                  className="custom-image"
                />
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
