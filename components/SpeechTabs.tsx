"use client";

import { useContext } from "react";
import { DataContext } from "@/context/DataContext";

export default function SpeechTabs() {
  const { currentSpeechTab, setCurrentSpeechTab } = useContext(DataContext);

  return (
    <div className="flex gap-3">
      <button className="w-[5.5rem] h-8 bg-dark text-white rounded-[5px]">
        noun
      </button>
      <button className="w-[5.5rem] h-8 bg-secondary rounded-[5px]">
        verb
      </button>
    </div>
  );
}
