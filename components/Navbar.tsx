import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed z-10 flex h-16 items-center bg-white w-full p-2 rounded-xl">
      <Link href="/" className="flex items-center justify-center">
        <Image src="/logo.png" alt="suvaye logo" width={50} height={50} />
        <h1 className="ml-2 font-medium hover:underline underline-offset-1">
          Suvaye Technology
        </h1>
      </Link>
    </header>
  );
}
