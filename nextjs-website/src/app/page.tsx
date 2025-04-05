"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";


export default function Casino() {
  

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-800 via-green-700 to-green-900 text-white">

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-8">
        {/* Blackjack Section */}
        <section id="blackjack" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Blackjack</h2>
          <div className="bg-black/50 p-6 rounded-lg shadow-lg flex items-center gap-6">
            {/* Placeholder for Game Screenshot */}
            <div className="w-1/3">
              <div className="bg-gray-700 w-full h-40 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Image Placeholder</span>
              </div>
            </div>
            {/* Game Description and Button */}
            <div className="flex-1">
              <p className="mb-4 text-lg">
                Play the classic card game of Blackjack! Try to get as close to 21 as possible without going over.
              </p>
              <Link href="/blackjack">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-lg shadow-md transition">
                  Play Blackjack
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Roulette Section */}
        <section id="roulette" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Roulette</h2>
          <div className="bg-black/50 p-6 rounded-lg shadow-lg flex items-center gap-6">
            {/* Placeholder for Game Screenshot */}
            <div className="w-1/3">
              <div className="bg-gray-700 w-full h-40 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Image Placeholder</span>
              </div>
            </div>
            {/* Game Description and Button */}
            <div className="flex-1">
              <p className="mb-4 text-lg">
                Spin the wheel and test your luck in Roulette! Bet on your favorite numbers or colors.
              </p>
              <Link href="/roulette">
                <button className="bg-red-500 hover:bg-red-700 text-black font-bold py-2 px-4 rounded-lg shadow-md transition">
                  Play Roulette
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Slots Section */}
        <section id="slots" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Slots</h2>
          <div className="bg-black/50 p-6 rounded-lg shadow-lg flex items-center gap-6">
            {/* Placeholder for Game Screenshot */}
            <div className="w-1/3">
              <div className="bg-gray-700 w-full h-40 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Image Placeholder</span>
              </div>
            </div>
            {/* Game Description and Button */}
            <div className="flex-1">
              <p className="mb-4 text-lg">
                Try your luck with the slot machines! Spin and win big prizes.
              </p>
              <Link href="/slots">
                <button className="bg-blue-500 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded-lg shadow-md transition">
                  Play Slots
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
