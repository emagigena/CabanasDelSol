import React from "react";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Complejo de cabañas del Sol - Santa Fe"
        />
      </Head>
      <script src="https://maps.googleapis.com/maps/api/js?key=TU_API_KEY&libraries=places"></script>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
