import React from "react";
import "../styles/globals.css";
import Footer from "../components/footer/Footer";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import NavBar from "../components/navBar/NavBar";
import CookieBanner from "../components/cookieBanner/CookieBanner";
import DynamicCookieBanner from "../components/cookieBanner/CookieBanner";
import WhatsAppButton from "../components/whatsappButton/WhatsAppButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <DynamicCookieBanner /> */}

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
