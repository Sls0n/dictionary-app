"use client";

import PlayPauseSvg from "./IconJSX/PlayPauseSvg";
import SpeechTabs from "./SpeechTabs";

interface DictionaryProps {
  pronunciation: string;
  meanings: any;
}

const Dictionary = ({ pronunciation, meanings }: DictionaryProps) => {
  return (
    <div className="max-h-fit rounded-2xl w-full border-2 border-border px-6 py-8 flex flex-col gap-6">
      {/* Upper part */}
      <div className="flex items-center gap-4">
        <PlayPauseSvg state="play" />
        <span>{pronunciation}</span>
      </div>

      {/* Middle part */}
      <div className="flex-1 flex flex-col gap-8 items-start px-1">
        {/* Buttons (noun & verb) */}
        <SpeechTabs />

        {/* Text (meaning) */}
        <ol
          role="list"
          className="list-decimal list-inside flex flex-col gap-3 font-medium"
        >
          {meanings.map((meaning: any, index: any) => {
            return <li key={index}>{meaning.definition}</li>;
          })}
        </ol>
      </div>
    </div>
  );
};

export default Dictionary;
