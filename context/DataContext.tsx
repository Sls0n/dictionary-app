"use client";

import React, { createContext, useState } from "react";

interface DataContextProps {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
  currentSpeechTab: "noun" | "verb";
  setCurrentSpeechTab: React.Dispatch<React.SetStateAction<"noun" | "verb">>;
  word: string;
  setWord: (word: string) => void;
}

const initialDataContext: DataContextProps = {
  data: null,
  setData: () => {},
  currentSpeechTab: "noun",
  setCurrentSpeechTab: () => {},
  word: "",
  setWord: () => {},
};

export const DataContext = createContext<DataContextProps>(initialDataContext);

export function DataContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState(null);
  const [currentSpeechTab, setCurrentSpeechTab] = useState<"verb" | "noun">(
    "noun"
  );
  const [word, setWord] = useState("Apple");

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        currentSpeechTab,
        setCurrentSpeechTab,
        word,
        setWord,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
