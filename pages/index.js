import Head from "next/head";
import { Inter } from "next/font/google";
import { useState } from "react";

import TextInput from "@/components/TextInput";
import SubmitButton from "@/components/SubmitButton";
import ResponseDisplay from "@/components/ResponseDisplay";
import useApi from "@/hooks/useApi";
import { getUserPrompt } from "@/prompts/promptUtils";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const { data, error, loading, fetchData } = useApi();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const submitValue = getUserPrompt(inputValue);
    await fetchData("/api/openai", "POST", submitValue);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <Head>
        <title>NextJS OpenAI Film Description</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <h1 className={inter.className}>OpenAI Fujifilm Custom Recipe </h1>
        <form onSubmit={handleSubmit}>
          <ResponseDisplay data={data} error={error} loading={loading} />
          <TextInput
            value={inputValue}
            onChange={handleInputChange}
            placeholder={"Enter a prompt"}
          />
          <SubmitButton disabled={loading} />
        </form>
      </main>
    </>
  );
}
