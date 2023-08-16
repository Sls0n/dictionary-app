import SearchSvg from "@/components/IconJSX/SearchSvg";

export default function SearchBar() {
  return (
    <form className="relative">
      <div className="absolute inset-0 flex items-center pl-3 pointer-events-none text-neutral-700">
        <SearchSvg />
      </div>
      <input
        type="search"
        id="search"
        className="w-full p-4 pl-12 rounded-2xl bg-accent text-md"
        placeholder="Search a word"
        required
      />
    </form>
  );
}
