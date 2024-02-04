import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting Started on Solana in 2024",
  description: "What you need to know about getting started on Solana in 2024.",
};

export default async function Page() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/intro_header.webp"
          alt="header"
          className="rounded-lg shadow-lg my-4"
        />
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter">
          Getting Started on Solana in 2024
        </h1>
        <h2 className="text-2xl font-medium tracking-tighter">
          A practical guide to getting started on the best blockchain of all
          time.
        </h2>
        <p className="text-xs">
          Published Feb 3, 2024 by{" "}
          <a
            href="https://twitter.com/solarnius"
            target="_blank"
            rel="noreferrer noopener"
            className="underline"
          >
            @solarnius
          </a>{" "}
          for the{" "}
          <a
            href="https://earn.superteam.fun/scribes/"
            target="_blank"
            rel="noreferrer noopener"
            className="underline"
          >
            Solana Scribes hackathon
          </a>
          .
        </p>
      </div>

      <hr />

      <h2 className="text-2xl font-bold tracking-tighter mb-[-8px]">
        Contents
      </h2>
      <ol className="list-decimal list-inside">
        <li>
          <a href="#intro" className="underline">
            Introduction - Why Solana?
          </a>
        </li>
        <li>
          <a href="#wallet" className="underline">
            Wallet Setup
          </a>
        </li>
        <li>
          <a href="#funding" className="underline">
            Funding Your Wallet
          </a>
        </li>
        <li>
          <a href="#staking" className="underline">
            Staking Your SOL
          </a>
        </li>
        <li>
          <a href="#defi" className="underline">
            Defi
          </a>
        </li>
        <li>
          <a href="#nfts" className="underline">
            NFTs
          </a>
        </li>
        <li>
          <a href="#community" className="underline">
            Community
          </a>
        </li>
        <li>
          <a href="#scams" className="underline">
            Scams to Avoid
          </a>
        </li>
      </ol>

      <h2 className="text-2xl font-bold tracking-tighter mb-[-8px]" id="intro">
        1. Introduction - Why Solana?
      </h2>
      <p>Solana is fast, cheap, and secure.</p>
      <p>Solana has awesome developers and an awesome ecosystem.</p>

      <h2 className="text-2xl font-bold tracking-tighter mb-[-8px]" id="wallet">
        2. Wallet Setup
      </h2>
      <p>Options: Phantom, Solflare, Backpack.</p>

      <h2
        className="text-2xl font-bold tracking-tighter mb-[-8px]"
        id="funding"
      >
        3. Funding Your Wallet
      </h2>
      <p>Need an account at a CEX. Kraken is good.</p>

      <h2
        className="text-2xl font-bold tracking-tighter mb-[-8px]"
        id="staking"
      >
        4. Staking Your SOL
      </h2>
      <p>Stake your SOL to earn more SOL.</p>

      <h2 className="text-2xl font-bold tracking-tighter mb-[-8px]" id="defi">
        5. Defi
      </h2>
      <p>Use Radium to earn more SOL.</p>

      <h2 className="text-2xl font-bold tracking-tighter mb-[-8px]" id="nfts">
        6. NFTs
      </h2>
      <p>Use Magic Eden to buy and sell NFTs.</p>

      <h2
        className="text-2xl font-bold tracking-tighter mb-[-8px]"
        id="community"
      >
        7. Community
      </h2>
      <p>Join the Solana Discord and the Solana subreddit.</p>

      <h2 className="text-2xl font-bold tracking-tighter mb-[-8px]" id="scams">
        8. Scams to Avoid
      </h2>
      <p>
        Be careful of phishing links and fake airdrops. Don&apos;t give your
        seed phrase to anyone.
      </p>

      <hr />
      <h2 className="text-lg font-bold tracking-tighter mb-[-8px]" id="scams">
        Works Cited
      </h2>
      <ul className="list-disc list-inside">
        <li>Header image by DALL-E</li>
      </ul>
    </div>
  );
}
