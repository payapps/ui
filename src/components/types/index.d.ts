import { NumberFormatPropsBase } from 'react-number-format';

namespace PayappsUI {
  export type InputSelectProps<T> =
    & NumberFormatPropsBase
    & T
    & {
      options: string[]
      maxDisplayLength?: number
      ariaLabel?: string
      onBlur?: (args: { value: string }) => void
    }
}