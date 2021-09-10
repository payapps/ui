import { PayappsUI } from '../types'
import { InputSelect } from '../InputSelect'

export const PercentageInputSelect = <T extends {}> (props: PayappsUI.InputSelectProps<T>) => {
  const { suffix, decimalScale, ...rest } = props
  return (
    <InputSelect
      {...rest}
      suffix="%"
      decimalScale={2}
    />
  )
}
