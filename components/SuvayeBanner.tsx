import Image from "next/image";
import Link from "next/link";

export default function SuvayeBanner() {
  return (
    <div className="w-full flex items-center justify-center">
      <Link href="/secondPage">
        <Image width={1200} height={1200} src="/banner.png" alt="suvaye banner" />
      </Link>
    </div>
  );
}
