import React from "react";
import "../styles/globals.css";
import Footer from "../components/Footer";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import NavBar from "../components/NavBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cabañas del Sol</title>
      </Head>
      <main className={`${montserrat.variable} font-sans`}>
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
