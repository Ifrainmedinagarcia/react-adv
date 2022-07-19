import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import "../styles/custom-style.css"
import { products } from '../data/products';


const product = products[0]

export const ShoppingPage = (): JSX.Element => {


  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({ reset, increaseBy, count, isMaxCountReached }) => (
            <>
              <ProductImage
                style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
                className="custom-image"
              />
              <ProductTitle className=" text-bold" />
              <ProductButtons className="custom-buttons" />
              <button onClick={reset}>Reset</button>
              <button onClick={()=> increaseBy(-2)}>-2</button>
              {(!isMaxCountReached && <button onClick={()=> increaseBy(2)}>2</button>)}
              
              <span>{`Count: ${count}`}</span>
            </>
          )
        }
      </ProductCard>

    </div>
  )
}
