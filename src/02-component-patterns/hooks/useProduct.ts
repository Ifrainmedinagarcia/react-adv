import { useEffect, useRef, useState } from 'react'
import { Product, OnChangeArgs, InitialValues } from '../interfaces/interfaces';

export interface UseProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: UseProductArgs) => {

  const [counter, setCounter] = useState<number>(initialValues?.count || value)

  const isContolled = useRef(!!onChange)
  const isMounted = useRef(false)

  const increaseBy = (valueArg: number) => {

    if (isContolled.current) {
      return onChange!({ count: valueArg, product })
    }
    let newValue = Math.max(counter + valueArg, 0)

    if (initialValues?.maxCount){
      newValue = Math.min(newValue, initialValues?.maxCount)
    }

    setCounter(newValue)
    onChange && onChange({ count: newValue, product })
  }

  const reset = () => {
    setCounter(initialValues?.count || value)
  }

  useEffect(() => {
    if (!isMounted.current) return
    setCounter(value)
  }, [value])

  useEffect(() => {
    isMounted.current = true
  }, [])

  return {
    counter,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset,
  }

}
