import Link from "next/link";

export default function Header() {
  return (
    <header className="flex">
      <Link href="/">HOME</Link>
      <Link href="/about">About</Link>
    </header>
  );
}
