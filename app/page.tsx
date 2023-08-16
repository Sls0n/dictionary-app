import Dictionary from "@/components/Dictionary";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const meaningsJson = [
    {
      definition:
        "A common, round fruit produced by the tree Malus domestica, cultivated in temperate climates.",
    },
    {
      definition:
        "Any of various tree-borne fruits or vegetables especially considered as resembling an apple; also (with qualifying words) used to form the names of other specific fruits such as custard apple, rose apple, thorn apple etc.",
    },
  ];

  return (
    <section className="flex flex-col gap-12">
      <SearchBar />
      <Dictionary pronunciation="/ˈæp.əl/" meanings={meaningsJson} />
    </section>
  );
}
