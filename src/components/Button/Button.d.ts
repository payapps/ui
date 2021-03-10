import { AriaAttributes, DOMAttributes } from "react";

export interface ButtonProps {
  children?: any;
  type: 'primary' | 'tertiary' | 'secondary';
  size?: 'lg' | 'md' | 'sm';
  loading?: boolean;
  disabled?: boolean;
  block?: boolean;
  autofocus?: boolean;
  form?: string;
  name?: string;
  htmlType?: 'button' | 'reset' | 'submit';
  value?: string;
  success?: boolean;
  className?: string;
}

export interface SubmitButtonProps extends ButtonProps {
  formaction?: string;
  formenctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
  formmethod?: 'get' | 'post';
  formnovalidate?: boolean;
  formtarget?: '_blank' | '_self' | '_parent' | '_top' | string;
}
