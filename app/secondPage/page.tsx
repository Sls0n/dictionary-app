"use client";

import { useContext } from "react";
import { DataContext } from "@/context/DataContext";
import Dictionary from "@/components/Dictionary";
import Link from "next/link";

export default function SecondPage() {
  const { data, currentSpeechTab } = useContext(DataContext);

  if (!data) {
    return (
      <div className="flex flex-col gap-4 items-start">
        <pre>ERROR!</pre>
        <p className="text-sm text-red-500 ">First fetch data from the root route, then navigate here</p>
        <Link href='/' className="bg-red-700 text-white p-2 rounded-md">&larr; Go back</Link>
      </div>
    );
  }

  return (
    <div>
      <p className="mb-2 text-lg">Word: {data.word}</p>
      <Dictionary
        pronunciation={data?.phonetic}
        meanings={
          data?.meanings[currentSpeechTab === "noun" ? 0 : 1].definitions
        }
      />
    </div>
  );
}
