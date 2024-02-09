import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-4 p-12">
      <div className="flex flex-col max-w-xl px-4 gap-4">
        <Image
          src="https://bafybeih3w6jc3tnw4lrok5ewtgcnoxer76ef5tdxkj773fyhzvyk2x3tgq.ipfs.nftstorage.link/5525.png"
          alt="solarnius"
          className="rounded-full h-40 w-40 shadow-lg"
          width={160}
          height={160}
        />
        <p>
          <a
            href="https://twitter.com/solarnius"
            className="underline text-4xl font-extrabold tracking-tighter"
            target="_blank"
            rel="noreferrer noopener"
          >
            solarnius
          </a>
        </p>
        <p>
          i am a builder and writer on Solana. if you would like to work
          together, please reach out on{" "}
          <a
            href="https://twitter.com/solarnius"
            className="underline"
            target="_blank"
            rel="noreferrer noopener"
          >
            twitter
          </a>
          .
        </p>

        <p className="font-bold tracking-tighter">things that i have built</p>
        <ul className="list-disc list-inside">
          <li>
            <a
              href="https://twitter.com/sagodsnft"
              className="underline"
              target="_blank"
              rel="noreferrer noopener"
            >
              sagods
            </a>{" "}
            - free dApp game for Saga holders
          </li>
          <li>
            <a
              href="https://sagaperks.xyz"
              className="underline"
              target="_blank"
              rel="noreferrer noopener"
            >
              saga perks
            </a>{" "}
            - site listing all perks for Saga holders
          </li>
          <li>
            <a
              href="https://github.com/solarnius/cnft-spam-filter"
              className="underline"
              target="_blank"
              rel="noreferrer noopener"
            >
              cnft-spam-filter
            </a>{" "}
            - an open-source spam filter for Solana cNFTs
          </li>
          <li>
            <a
              href="https://filtoor.xyz"
              className="underline"
              target="_blank"
              rel="noreferrer noopener"
            >
              filtoor
            </a>{" "}
            - a hosted API for our open-source spam filter
          </li>
        </ul>

        <p className="font-bold tracking-tighter">things that i have written</p>
        <ul className="list-disc list-inside">
          <li>
            <Link
              href="/blog/getting-started-on-solana-2024"
              className="underline"
            >
              Getting Started on Solana in 2024
            </Link>{" "}
            - Feb 4, 2023
          </li>
          <li>
            <Link href="/blog/cnft-spam-filter" className="underline">
              Fighting cNFT Spam on Solana
            </Link>{" "}
            - Feb 5, 2023
          </li>
        </ul>
      </div>
    </main>
  );
}
