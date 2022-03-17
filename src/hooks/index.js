import { calculatorSelector } from '@/store/selectors'
import { useSelector } from 'react-redux'

export const useCalculatorSelector = () =>
  useSelector(calculatorSelector)
