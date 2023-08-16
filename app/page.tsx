import Dictionary from "@/components/Dictionary";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <section className="flex flex-col gap-12">
      <SearchBar />
      <Dictionary />
    </section>
  );
}
