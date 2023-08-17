"use client";

import { useContext, useRef } from "react";
import { DataContext } from "@/context/DataContext";
import SearchSvg from "@/components/IconJSX/SearchSvg";

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setWord, word } = useContext(DataContext);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRef.current) return;
    setWord(inputRef.current?.value);
  };

  return (
    <form onSubmit={submitHandler} className="relative">
      <div className="absolute inset-0 flex items-center pl-3 pointer-events-none text-neutral-700">
        <SearchSvg />
      </div>
      <input
        type="search"
        ref={inputRef}
        defaultValue={word}
        id="search"
        className="w-full p-4 pl-12 rounded-2xl bg-accent text-sm"
        placeholder="Search a word"
        required
      />
    </form>
  );
}
