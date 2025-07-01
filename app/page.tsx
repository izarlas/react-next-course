import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/meals/share">Create Meal</Link> <br />
      <Link href="/community">Community</Link>
    </main>
  );
}
