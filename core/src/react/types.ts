import { type ReactElement, type ReactNode } from "react";

type ReactNodeOrVoid = ReactNode | void;
type ReactChildren = ReactElement<any, any>;
type ReactChildrenOrVoid = ReactChildren | void;

export {
  type ReactChildren,
  type ReactChildrenOrVoid,
  type ReactNode,
  type ReactNodeOrVoid,
};
