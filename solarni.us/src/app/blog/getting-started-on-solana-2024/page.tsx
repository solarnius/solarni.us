import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting Started on Solana in 2024",
  description: "What you need to know about getting started on Solana in 2024.",
};

export default async function Page() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-6xl font-extrabold tracking-tighter">
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
        <li>Introduction - Why Solana?</li>
        <li>Wallet Setup</li>
        <li>Funding Your Wallet</li>
        <li>Staking Your SOL</li>
        <li>Defi</li>
        <li>NFTs</li>
        <li>Scams to Avoid</li>
      </ol>

      <h2 className="text-2xl font-bold tracking-tighter mb-[-8px]">
        1. Introduction - Why Solana?
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}
