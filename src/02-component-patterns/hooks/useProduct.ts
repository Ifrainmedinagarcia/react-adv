import { useEffect, useState } from 'react'
import { Product, OnChangeArgs } from '../interfaces/interfaces';

export interface UseProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number
}

export const useProduct = ({ onChange, product, value = 0 }: UseProductArgs) => {

  const [counter, setCounter] = useState<number>(value)

  const increaseBy = (valueArg: number) => {
    const newValue = Math.max(counter + valueArg, 0)

    setCounter(newValue)

    onChange && onChange({ count: newValue, product })
  }

  useEffect(()=> {
    setCounter(value)
  }, [value])

  return {
    counter,
    increaseBy,
  }

}