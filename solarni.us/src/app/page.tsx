import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-4 p-12">
      <Image
        src="https://bafybeih3w6jc3tnw4lrok5ewtgcnoxer76ef5tdxkj773fyhzvyk2x3tgq.ipfs.nftstorage.link/5525.png"
        alt="solarnius"
        className="rounded-full h-40 w-40 shadow-lg"
        width={160}
        height={160}
      />
      <p>
        hi, i&apos;m{" "}
        <a
          href="https://twitter.com/solarnius"
          className="underline"
          target="_blank"
          rel="noreferrer noopener"
        >
          solarnius
        </a>
      </p>
      <p>i build on solana. here are some things that i have built:</p>
      <ul className="list-disc">
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
      </ul>
    </main>
  );
}
