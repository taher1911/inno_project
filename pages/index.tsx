import Head from "next/head";
import HomePage from "../screens/homePage/HomePage";

function Home() {
  return (
    <div>
      <Head>
        <title>Innovatio Labs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
}

export default Home;
