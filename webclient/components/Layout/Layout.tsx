import React from "react";
import Header from "@webclient/components/Header/Header";

export type LayoutProps = {
  title: string;
  children?: React.ReactNode;
};

const LayoutComponent = (props: LayoutProps) => {
  return (
    <>
      <Header title={props.title} />

      <div className="container mx-auto p-4">
        {props.children}
      </div>
    </>
  );
};

export default LayoutComponent;
