/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
import { NumberFormatPropsBase } from 'react-number-format';

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const svgUrl: string;
  const svgComponent: SvgrComponent;
  export default svgUrl;
  export { svgComponent as ReactComponent }
}

namespace PayappsUI {
  export type InputSelectProps<T> =
    & NumberFormatPropsBase
    & T
    & {
      options: string[]
      maxDisplayLength?: number
    }
}
