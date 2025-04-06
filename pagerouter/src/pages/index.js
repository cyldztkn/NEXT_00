import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

import Head from "next/head";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      ANASAYFA
      <Head>
        <title>Next.js Pages Router</title>
        <meta name="description" content="Pages Router Örneği" />
      </Head>
      <header >

        <h1>Next.js Pages Router Örneği</h1>
      </header>
      <main className="">
        <h2>Ana Sayfa</h2>
        <p>Pages Router ile oluşturulmuş bir Next.js projesi.</p>
      </main>
    </div>
  );
}
