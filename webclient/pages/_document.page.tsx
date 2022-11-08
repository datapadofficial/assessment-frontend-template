import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="dark:bg-slate-700 bg-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
