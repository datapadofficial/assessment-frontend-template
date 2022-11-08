import { type ReactChildren } from "./types";

interface ConditionalProps {
  if: boolean;
  children?: ReactChildren;
  then?: ReactChildren;
  otherwise?: ReactChildren;
}

function Conditional(props: ConditionalProps) {
  if (props.if) {
    return props.then ?? props.children ?? null;
  }

  return props.otherwise ?? null;
}

export { Conditional, Conditional as default };
