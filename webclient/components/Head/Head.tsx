import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

export type HeadProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
};

const HeadComponent = (props: HeadProps) => {
  const { title, description, children } = props;
  return (
    <Head>
      <title key="title">{title}</title>
      <meta name="description" key="description" content={description} />
      <meta itemProp="name" key="name" content={title} />
      <link rel="icon" href="/favicon.ico" />
      {children}
    </Head>
  );
};

export default HeadComponent;
