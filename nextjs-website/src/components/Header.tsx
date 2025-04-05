"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [balance, setBalance] = useState(0);

  // Simulate fetching balance from a database
  useEffect(() => {
    const fetchBalance = async () => {
      const response = await fetch("/api/balance"); // Example API endpoint
      const data = await response.json();
      setBalance(data.balance);
    };

    fetchBalance();
  }, []);

  return (
    <header className="bg-black py-6 shadow-lg">
      <div className="container mx-auto flex justify-between relative items-center px-6">
        <Link href="/">
          <h1 className="text-3xl font-extrabold tracking-wide text-yellow-400">
            Casino Royale
          </h1>
        </Link>
        <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-6">
          <Link href="/blackjack" className="text-lg hover:text-yellow-400 transition">
            Blackjack
          </Link>
          <Link href="/roulette" className="text-lg hover:text-yellow-400 transition">
            Roulette
          </Link>
          <Link href="/slots" className="text-lg hover:text-yellow-400 transition">
            Slots
          </Link>
        </nav>
        {/* Display Balance */}
        <div className="text-yellow-400 font-bold text-lg">
          Balance: ${balance.toFixed(2)}
        </div>
      </div>
    </header>
  );
}