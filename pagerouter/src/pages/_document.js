import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        <title>PAGEROUTER</title>
      </Head>
      <body className="antialiased">
        <header className="flex p-8 items-center justify-center bg-indigo-950 text-white text-2xl">
          PAGEROUTER
        </header>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
