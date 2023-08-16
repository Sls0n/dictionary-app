import PlayPauseSvg from "./IconJSX/PlayPauseSvg";

export default function Dictionary() {
  return (
    <div className="h-[30rem] rounded-2xl w-full border-2 border-border px-6 py-8 flex flex-col gap-6">
      {/* Upper part*/}
      <div className="basis-[10%] flex items-center gap-4">
        <PlayPauseSvg state="play" />
        <span>/ˈæp.əl/</span>
      </div>

      {/* Middle part*/}
      <div className="flex-1 flex flex-col gap-8 items-start px-1">
        {/* Buttons (noun & verb) */}
        <div className="flex gap-3 [&>*]:rounded-[5px]">
          <button className="w-[5.5rem] h-8 bg-dark text-white">noun</button>
          <button className="w-[5.5rem] h-8 bg-secondary">verb</button>
        </div>

        {/* Text (meaning) */}
        <ol
          role="list"
          className="list-decimal list-inside flex flex-col gap-3 font-medium"
        >
          <li>
            A common, round fruit produced by the tree Malus domestica,
            cultivated in temperate climates.
          </li>
          <li>
            Any of various tree-borne fruits or vegetables especially considered
            as resembling an apple; also (with qualifying words) used to form
            the names of other specific fruits such as custard apple, rose
            apple, thorn apple etc.
          </li>
        </ol>
      </div>
    </div>
  );
}
