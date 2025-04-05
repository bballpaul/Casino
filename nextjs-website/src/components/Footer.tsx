"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  return (
    <footer className="bg-black py-6">
    <div className="container mx-auto text-center">
      <p className="text-gray-400">&copy; 2025 Casino Royale. All rights reserved.</p>
      <p>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 hover:underline"
        >
          Built with Next.js
        </a>
      </p>
    </div>
  </footer>
  );
}