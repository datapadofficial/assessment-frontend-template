import { Conditional } from "@core/react/conditional";

interface TitleProps {
  icon?: string;
  title: string;
  subtitle: string;
}

function Title(props: TitleProps) {
  return (
    <div className="mb-5">
      <h1 className="text-4xl dark:text-white">
        <Conditional if={props.icon !== undefined}>
          {props.icon}
          {" "}
        </Conditional>
        {props.title}
      </h1>
      <Conditional if={props.subtitle !== undefined}>
        <h4>{props.subtitle}</h4>
      </Conditional>
    </div>
  );
}

export default Title;
