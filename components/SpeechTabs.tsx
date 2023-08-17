"use client";

import { useContext } from "react";
import { DataContext } from "@/context/DataContext";
import SpeechTabButton from "./SpeechTabButton";

export default function SpeechTabs() {
  const { currentSpeechTab, setCurrentSpeechTab } = useContext(DataContext);

  const currentSpeechTabHandler = (tab: "noun" | "verb") => {
    setCurrentSpeechTab(tab);
  };

  return (
    <div className="flex gap-3">
      <SpeechTabButton
        active={currentSpeechTab === "noun"}
        onClick={() => currentSpeechTabHandler("noun")}
      >
        noun
      </SpeechTabButton>
      <SpeechTabButton
        active={currentSpeechTab === "verb"}
        onClick={() => currentSpeechTabHandler("verb")}
      >
        verb
      </SpeechTabButton>
    </div>
  );
}
