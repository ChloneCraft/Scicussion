import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Textbox from "@/components/Textbox";
import AddArgumentButton from "@/components/AddArgumentButton";
import { create } from "zustand";

interface Argument {
  text: string;
  show: boolean;
}
type Arguments = Argument[];

export default function Home() {
  const useArgStore = create((set) => ({
    arguments: [],
    addArgument: (newArgument: Argument) =>
      set((state: any) => ({ arguments: state.arguments.push(newArgument) })),
    // hideArguments: () =>
    //   set((state: any) => ({
    //     arguments: state.arguments.map((arg: Argument) => {
    //       arg.show = false;
    //     }),
    //   })),
    //   showArguments: () =>
    //   set((state: any) => ({
    //     arguments: state.arguments.map((arg: Argument) => {
    //       arg.show = true;
    //     }),
    //   })),
  }));
  function addBox(): void {}
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
          <AddArgumentButton name="proButton" addBox={addBox} />
        </section>
        <section className="ContraArgumentsContainer"></section>
      </main>
    </>
  );
}
