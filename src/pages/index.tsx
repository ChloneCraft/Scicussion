import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Textbox from "@/components/Textbox";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Discuss like a scientist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="ProArgumentsContainer">
          <button>ADD</button>
        </section>
        <section className="ContraArgumentsContainer"></section>
      </main>
    </>
  );
}
