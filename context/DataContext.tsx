"use client";

import React, { createContext, useState } from "react";

interface DataContextProps {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
  currentSpeechTab: "noun" | "verb";
  setCurrentSpeechTab: React.Dispatch<React.SetStateAction<"noun" | "verb">>;
}

const initialDataContext: DataContextProps = {
  data: null,
  setData: () => {},
  currentSpeechTab: "noun",
  setCurrentSpeechTab: () => {},
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

  return (
    <DataContext.Provider
      value={{ data, setData, currentSpeechTab, setCurrentSpeechTab }}
    >
      {children}
    </DataContext.Provider>
  );
}
