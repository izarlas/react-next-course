import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/meals">Meals</Link> <br />
      <Link href="/meals/share">Share Meal</Link> <br />
      <Link href="/community">Community</Link>
    </main>
  );
}
