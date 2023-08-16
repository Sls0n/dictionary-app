import PlayPauseSvg from "./IconJSX/PlayPauseSvg";

interface Meaning {
  definition: string;
}

type DictionaryProps = {
  pronunciation: string;
  meanings: Meaning[];
};

const Dictionary = ({ pronunciation, meanings }: DictionaryProps) => {
  return (
    <div className="max-h-[30rem] rounded-2xl w-full border-2 border-border px-6 py-8 flex flex-col gap-6">
      {/* Upper part */}
      <div className="flex items-center gap-4">
        <PlayPauseSvg state="play" />
        <span>{pronunciation}</span>
      </div>

      {/* Middle part */}
      <div className="flex-1 flex flex-col gap-8 items-start px-1">
        {/* Buttons (noun & verb) */}
        <div className="flex gap-3">
          <button className="w-[5.5rem] h-8 bg-dark text-white rounded-[5px]">
            noun
          </button>
          <button className="w-[5.5rem] h-8 bg-secondary rounded-[5px]">
            verb
          </button>
        </div>

        {/* Text (meaning) */}
        <ol
          role="list"
          className="list-decimal list-inside flex flex-col gap-3 font-medium"
        >
          {meanings.map((meaning, index) => (
            <li key={index}>{meaning.definition}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Dictionary;
