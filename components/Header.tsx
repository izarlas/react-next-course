import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Browse Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
