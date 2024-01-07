import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Textbox from "../../components/Textbox";
import AddArgumentButton from "../../components/AddArgumentButton";
import { create } from "zustand";
import { useState } from "react";
import useSWR from "swr";

interface Argument {
  text: string;
  show: boolean;
}
type Arguments = Argument[];

let createProArg = false;
let createContraArg = false;

//---------send request to api---------------
export async function sendRequest(url: string, { arg }: any) {
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(arg),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    return await response.json();
  } else {
    console.error(`Error: ${response.status}`);
    return "error";
  }
}
//---------send request to api---------------

export default function Home() {
  const [createProArg, setCreateProArg] = useState(false);
  const [createContraArg, setCreateContraArg] = useState(false);

  const useArgStore = create((set) => ({
    arguments: [],
    addArgument: (newArgument: Argument) =>
      set((state: any) => ({ arguments: state.arguments.push(newArgument) })),
  }));

  //----------create input field for new argument------------
  function addBox(e: Event, name: string): void {
    if (name === "proButton") {
      setCreateProArg(true);
      sendRequest("/api/createDiscussion", { arg: "test" });
    } else {
      setCreateContraArg(true);
    }
  }
  //----------create input field for new argument------------
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Discuss like a scientist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="thesis">Sollten wir Migration begrenzen?</h1>
        <article className="proContraHead">
          <section className="proArgumentsContainer">
            <h2>Pro</h2>
            {!createProArg && !createContraArg && (
              <AddArgumentButton
                name="proButton"
                addBox={(e: Event) => addBox(e, "proButton")}
              />
            )}
            {createProArg && (
              <Textbox
                side="pro"
                handleCancel={() => setCreateProArg(false)}
              ></Textbox>
            )}
          </section>
          <section className="contraArgumentsContainer">
            <h2>Contra</h2>
            {!createProArg && !createContraArg && (
              <AddArgumentButton
                name="contraButton"
                addBox={(e: Event) => addBox(e, "contraButton")}
              />
            )}
            {createContraArg && (
              <Textbox
                side="contra"
                handleCancel={() => setCreateContraArg(false)}
              ></Textbox>
            )}
          </section>
        </article>
      </main>
    </>
  );
}
