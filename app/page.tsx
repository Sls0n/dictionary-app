"use client";

import Dictionary from "@/components/Dictionary";
import SearchBar from "@/components/SearchBar";
import SuvayeBanner from "@/components/SuvayeBanner";
import { DataContext } from "@/context/DataContext";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const { word, setData, data, currentSpeechTab } = useContext(DataContext);

  useEffect(() => {
    if (!word) return;
    async function fetchData(query: string) {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
        );

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const data = await response.json();
        setData(data[0]);
        setIsError(false);
      } catch (err: any) {
        setIsError(true);
        setErrorMessage(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData(word);
  }, [setData, word]);

  return (
    <section className="flex flex-col gap-12">
      <SearchBar />
      {loading && (
        <div className="w-full h-full">
          <p>loading...</p>
        </div>
      )}
      {data && !isError && (
        <Dictionary
          pronunciation={data?.phonetic}
          meanings={
            data?.meanings[currentSpeechTab === "noun" ? 0 : 1]
              ?.definitions || [{ definition: "NO DEFINITION FOUND" }]
          }
          audioSrc={data?.phonetics[0]?.audio}
        />
      )}

      {isError && (
        <>
          <div className="flex flex-col gap-y-4">
            <pre>{errorMessage}</pre>
            <p className="text-md text-red-500 ">The word wasnt found!</p>
          </div>
        </>
      )}

      {!loading && data && <SuvayeBanner />}
    </section>
  );
}
