import Head from "next/head";

import Home from "./home";

export default function Index() {
  return (
    <>
      <Head>
        <title>Flor e Ser - Questionário para conscientização sobre violência doméstica</title>
        <meta name="description" content="Questionário para conscientização sobre violência doméstica - Flor e Ser" />
      </Head>

      <main>
        <Home />

      </main>
    </>
  );
}
