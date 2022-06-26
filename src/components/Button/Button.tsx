import type { Component, JSX } from "solid-js";
import { mergeProps } from "solid-js";

function withDefaults<P>(Comp: Component<P>, defaultProps: Partial<P>) {
  return ((props: any) => (
    <Comp {...mergeProps(defaultProps, props)} />
  )) as Component<P>;
}
export type ButtonProps =
  | // Must specify icon, children or both - but never none of them
  {
      icon: JSX.Element;
      children?: never;
    }
  | { icon?: never; children: any }
  | { icon: JSX.Element; children: any };

const Button: Component<ButtonProps> = (props) => {
  const { children } = props;

  return <button>{children}</button>;
};

export default withDefaults(Button, {});
