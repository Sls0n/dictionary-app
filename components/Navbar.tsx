import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed z-10 flex h-16 items-center">
      <Link href="/secondPage" className="flex items-center justify-center">
        <Image src="/logo.png" alt="suvaye logo" width={50} height={50} />
        <h1 className="ml-2 font-semibold hover:underline underline-offset-1">
          Suvaye Technology
        </h1>
      </Link>
    </header>
  );
}
