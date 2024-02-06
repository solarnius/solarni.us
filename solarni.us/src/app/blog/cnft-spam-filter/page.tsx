import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fighting cNFT Spam on Solana",
  description:
    "How I built cnft-spam-filter, an open-source spam filter for cNFTs on Solana.",
  openGraph: {
    title: "Fighting cNFT Spam on Solana",
    description:
      "How I built cnft-spam-filter, an open-source spam filter for cNFTs on Solana.",
    type: "article",
    url: "https://solarni.us/blog/cnft-spam-filter",
    siteName: "solarni.us",
    locale: "en_US",
    images: [
      {
        url: "https://solarni.us/spam/header.webp",
        width: 1792,
        height: 1024,
      },
    ],
  },
};

export default async function Page() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2">
        <img
          src="/spam/header.webp"
          alt="header"
          className="rounded-lg shadow-lg mb-4 w-full"
        />
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter">
          Fighting cNFT Spam on Solana
        </h1>
        <h2 className="text-2xl font-medium tracking-tighter">
          How I built cnft-spam-filter, an open-source spam filter for cNFTs on
          Solana with a 96% accuracy rate.
        </h2>
        <p className="text-xs">
          Published Feb 6, 2024 by{" "}
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
          , project for the{" "}
          <a
            href="https://twitter.com/metaplex/status/1745502973277691931"
            target="_blank"
            rel="noreferrer noopener"
            className="underline"
          >
            cHack hackathon
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
          <a href="#1" className="underline">
            Understanding the Problem
          </a>
        </li>
        <li>
          <a href="#2" className="underline">
            Outlining a Good Solution
          </a>
        </li>
        <li>
          <a href="#3" className="underline">
            Characteristics of Spam NFTS
          </a>
        </li>
        <li>
          <a href="#4" className="underline">
            The Solution
          </a>
        </li>
        <li>
          <a href="#5" className="underline">
            Benchmarks
          </a>
        </li>
        <li>
          <a href="#6" className="underline">
            Conclusion
          </a>
        </li>
        <li>
          <a href="#7" className="underline">
            Acknowledgements
          </a>
        </li>
      </ol>

      <h2 id="1" className="text-2xl font-bold tracking-tighter">
        1. Understanding the Problem
      </h2>
      <p>
        Spammers and scammers are heavily polluting the Solana ecosystem right
        now. They are creating cNFTs with misleading names and images and
        sending them out en masse to try to catch unsuspecting users.
      </p>
      <p>
        This is extremely annoying as it results in wallets being full of scammy
        NFTs. While there are some attempts at a wallet-level to filter these
        NFTs out, they are unfortunately not very effective thus far.
      </p>
      <p>
        Let&apos;s take a look at how these cNFTs are sent out. On Jan 29, I
        received the following cNFT:
      </p>
      <img src="/spam/0.png" alt="0" className="rounded-lg shadow-lg w-full" />
      <p>
        This cost the scammer 0.000005 SOL, or $0.0000013 at the time of
        writing. Let&apos;s look at the Merkle tree that this cNFT is a part of:
      </p>
      <img src="/spam/1.png" alt="0" className="rounded-lg shadow-lg w-full" />
      <p>
        With a depth of 24 and a max buffer size of 64, this tree can hold 16.7
        million cNFTs. So far, it&apos;s transferred about 1 million. What is
        especially annoying about this configuration is that the assets are
        actually{" "}
        <span className="font-bold">not transferrable or burnable</span> without
        using bespoke tools like solincinerator.
      </p>
      <img src="/spam/4.png" alt="0" className="rounded-lg shadow-lg w-full" />
      <p>
        So, these cNFTs just accumulate in wallets, crowding out legitimate
        airdrops and NFTs and being generally really annoying. While it is a
        good thing that it&apos;s possible to send out so many assets for cheap,
        we need better ways to clearly demarcate spam assets from legitimate
        assets.
      </p>
      <p>
        This is a problem that has been solved before. Email had the exact same
        issue: it&apos;s very cheap to send an email, and spammers take
        advantage of this to send out scams en-masse.
      </p>
      <p>
        Some people have suggested that the solution to spam is to introduce
        constraints at the RPC or protocol level about who should be allowed to
        mint assets: whitelists, etc.{" "}
        <span className="font-bold">This is a bad and scary idea.</span> The
        whole point of a blockchain is that there is no authority that can tell
        you who can and cannot write to it.
      </p>
      <p>
        The solution is therefore at the app level: to create filters that can
        identify spam/scam assets and filter them out. This project is an
        approach at creating such a filter.
      </p>

      <h2 id="2" className="text-2xl font-bold tracking-tighter">
        2. Outlining a Good Solution
      </h2>
      <p>
        Before we can attempt to build a solution, we must first outline what a
        good solution would look like. A good solution to this problem is:
      </p>
      <ul className="list-disc list-inside">
        <li>
          Open-source, so we don&apos;t have to rely on a centralized arbiter of
          what is spam and what isn&apos;t
        </li>
        <li>
          Portable, so it can be used by many apps in different environments
          (server, serverless, browser, etc.)
        </li>
        <li>Fast, so user experience is not affected very much</li>
        <li>
          Accurate, so legitimate NFTs are not marked as spam and illegitimate
          NFTs are not marked as safe
        </li>
      </ul>

      <h2 id="3" className="text-2xl font-bold tracking-tighter">
        3. Characteristics of Spam NFTS
      </h2>
      <p>
        To begin, let&apos;s consider what characteristics we can use to
        differentiate between safe and spam NFTs.
      </p>
      <ul className="list-disc list-inside">
        <li>
          <span className="font-bold">URL in the image:</span> almost always
          spam.
        </li>
        <li>
          <span className="font-bold">Emoji in the name:</span> usually spam.
        </li>
        <li>
          <span className="font-bold">
            Image contains voucher/claim/award/scammy text:
          </span>{" "}
          almost always spam.
        </li>
        <li>
          <span className="font-bold">cNFT is untransferrable:</span> almost
          always spam.
        </li>
      </ul>
      <p>
        In general, these characteristics fall under two categories: the
        &quot;eye test&quot; of whether the image/text looks scammy, and the
        &quot;on-chain test&quot; of whether the asset seems at all legitimate.
      </p>
      <p>
        Therefore, our system will use a combination of these two categories of
        factors in order to classify cNFTs as legitimate or not.
      </p>

      <h2 id="3" className="text-2xl font-bold tracking-tighter">
        4. The Solution
      </h2>
      <p>
        Introducing:{" "}
        <a
          href="https://github.com/solarnius/cnft-spam-filter/"
          target="_blank"
          className="underline"
        >
          cnft-spam-filter
        </a>
        , an open-source, lightweight, portable, and fast spam filter for cNFTs
        that I wrote over the past few days.
      </p>
      <p>
        Here it is running entirely in the browser from a random selection of my
        cNFTs:
      </p>
      <video
        controls
        className="rounded-lg shadow-lg w-full"
        src="https://github.com/solarnius/cnft-spam-filter/assets/157436846/3bd2788e-84e1-41b7-8600-a297a99696f3"
      />
      <p>
        If you&apos;re a developer, you can follow the instructions on the repo
        to get started using it. In the rest of this article, I&apos;ll explain
        how I designed the filter and go over some benchmarks for its
        performance.
      </p>
      <p>
        The library is broken up into two main functions:{" "}
        <span className="font-mono bg-slate-100 dark:bg-slate-700 rounded-md p-1">
          extractTokens
        </span>{" "}
        and{" "}
        <span className="font-mono bg-slate-100 dark:bg-slate-700 rounded-md p-1">
          classify
        </span>
        .
      </p>
      <h3 className="font-mono text-xl bg-slate-100 dark:bg-slate-700 rounded-md p-1 w-max">
        extractTokens
      </h3>
      <img src="/spam/5.png" alt="0" className="rounded-lg shadow-lg w-full" />
      <p>
        In order to classify a cNFT as spam or ham (not spam), we must first be
        able to describe the cNFT. To do so, we generate a list of tokens from
        its on-chain metadata and from running its image through Optical
        Character Recognition (OCR).
      </p>
      <p>
        The tokens returned by{" "}
        <span className="font-mono bg-slate-100 dark:bg-slate-700 rounded-md p-1">
          extractTokens
        </span>{" "}
        roughly correspond to the characteristics of spam cNFTs we outlined
        above. We detect links in the image, emojis in the name, whether the
        tree depth makes burning it hard, and all of the scammy text in the
        image.
      </p>

      <h3 className="font-mono text-xl bg-slate-100 dark:bg-slate-700 rounded-md p-1 w-max">
        classify
      </h3>
      <img src="/spam/6.png" alt="6" className="rounded-lg shadow-lg w-full" />
      <p>
        Once we have described the cNFT, we can classify it as either
        &quot;spam&quot; or &quot;ham&quot; using a model that I trained on a
        hand-labeled set of scam and legitimate cNFTs.
      </p>
      <p>
        The model is a naive bayesian classifier that uses the tokens generated
        by{" "}
        <span className="font-mono bg-slate-100 dark:bg-slate-700 rounded-md p-1">
          extractTokens
        </span>
        . Basically, it considers the posterior probability that a cNFT is spam
        given the tokens that represent it, knowing the prior probability and
        the likelihood (where the likelihood is learned by model training).
      </p>
      <p>
        In laymans terms: the classifier is trained on a bunch of spam and ham
        data and then compares a piece of new data to what it knows. It just
        tells you whether the new data looks more like spam or more like ham.
      </p>
      <p>
        It&apos;s not guaranteed to be accurate, but it is generally pretty
        good.
      </p>

      <h2 id="5" className="text-2xl font-bold tracking-tighter">
        5. Benchmarks
      </h2>
      <p>
        When embarking on this project, I set out a few criteria for what a good
        solution would look like:
      </p>
      <ul className="list-disc list-inside">
        <li>Open-source</li>
        <li>Portable</li>
        <li>Fast</li>
        <li>Accurate</li>
      </ul>
      <p>This library meets all of these criteria.</p>
      <h3 className="text-xl font-bold tracking-tighter">Open-source</h3>
      <p>
        All code is released on GitHub under the MIT license, as well as all
        training data and the code for training a model. You can modify this
        code and use it however you want with or without attribution. As
        open-source as open-source gets.
      </p>

      <h3 className="text-xl font-bold tracking-tighter">Portability</h3>
      <p>
        I&apos;ve put together examples in the GitHub directory of the library
        functioning in three different environments: on a server, in a
        serverless lambda function, and in the browser.
      </p>
      <p>
        This library is extremely portable, so developers can use it wherever
        makes sense for their application. If you run a high-performance app
        like an NFT exchange, you probably want to host it on your own server.
        If you run a wallet, you might consider running it on the client. And if
        you run an indexer or are doing stats, you might want to use a lambda
        function. It&apos;s up to you: the library will work in all of these
        environments (with varying speeds based on system resources).
      </p>

      <h3 className="text-xl font-bold tracking-tighter">Speed</h3>
      <p>
        Speed is probably the weakest point of this library. It takes about 1
        second for most cNFTs, but can take up to 10 seconds with weird
        images--mostly in the OCR. There are definite improvements to be made
        here, but it&apos;s usable for now.
      </p>
      <p>Speed trace (in MS) of a slow run:</p>
      <img
        src="/spam/7.png"
        alt="7"
        className="rounded-lg shadow-lg self-center"
      />
      <p>Speed trace (in MS) of a fast run (note how much quicker OCR is):</p>
      <img
        src="/spam/8.png"
        alt="8"
        className="rounded-lg shadow-lg self-center"
      />
      <p>
        Given that we have to make two consecutive RPC calls, the lower limit on
        speed is about 400ms. The most obvious way to improve our current speed
        is to add a layer that downloads the image and resizes it before doing
        OCR, as the slow calls are generally on large files. This is a future
        improvement: feel free to add it yourself!
      </p>

      <h3 className="text-xl font-bold tracking-tighter">Accuracy</h3>
      <img
        src="/spam/10.png"
        alt="10"
        className="rounded-lg shadow-lg w-full"
      />
      <p>
        I&apos;ve prepared a test set with cNFTs picked from my wallets
        including spam and ham cNFTs. The confusion matrix for the library is
        shown above. The sample size is pretty small, so please submit your spam
        and legitimate assetIds so that I can improve the training and the test
        sets!
      </p>
      <p>
        It currently has an ~96% accuracy rate on the test set, which I&apos;m
        really happy about!
      </p>
      <p>
        Of course, the training and test sets are both really small right now
        and I expect performance to degrade significantly in the wild,
        especially as spammers catch on to spam detection techniques. Spam
        fighting is a constant battle, but this is a good start.
      </p>
      <p>
        If you want to help, please consider taking some time to copy the
        assetIds of both legitimate and spam cNFTs and send them my way by
        <a
          href="https://github.com/solarnius/cnft-spam-filter/issues/new"
          target="_blank"
        >
          opening a GitHub issue
        </a>
        ! It would save me a lot of work :D
      </p>
      <p>
        If you do submit, please add only the asset IDs in quotes separated by
        commas, eg:
        <pre className="whitespace-pre-line mt-4 bg-slate-50 dark:bg-slate-700 p-2 rounded-md w-min">
          &quot;7tU3zdEQMmRij6h9wxhCwadVWaQBhmRCF71mmoYwQmVD&quot;,
          &quot;8bVGLUfaRQuFT5LZc32xd8nu1QEyxQubxERonYmFogvf&quot;,
          &quot;35YeQF7yfx4N6DZzuZAoQNx5McLinjGb8NyN7Xjqgpys&quot;,
          &quot;Bh4dN9LiLmsbiWWR6mcc8bKs7UJorgoVxNseQ1Kb3mDb&quot;
        </pre>
      </p>
      <p>Thanks!</p>

      <h2 id="6" className="text-2xl font-bold tracking-tighter">
        6. Conclusion
      </h2>
      <p>
        This project has achieved what it set out to achieve: an accurate, fast,
        open-source spam filter for cNFTs that can be run on any device in any
        environment. Now it&apos;s time to get feedback from the ecosystem and
        get it out in the wild!
      </p>
      <p>
        If you&apos;re a project maintainer and you want to use this filter and
        need help or custom features, feel free to hit me up{" "}
        <a
          href="https://twitter.com/solarnius"
          target="_blank"
          className="underline"
        >
          on Twitter
        </a>
        .
      </p>
      <p>
        Hopefully, this project contributes something useful to the Solana
        ecosystem :) it was a lot of fun to make!
      </p>

      <h2 id="7" className="text-2xl font-bold tracking-tighter">
        7. Acknowledgements
      </h2>
      <p>
        Big thanks to Metaplex for sponsoring cHack and giving me an opportunity
        to maybe win a prize for building a public good like a cNFT spam filter.
      </p>
      <p>
        Big thanks to @LamportDAO, @heliuslabs, @SolanaCollectiv, and
        @SuperteamEarn for sponsoring the Solana Scribes hackathon and
        compelling me to write this accompanying article, as well as Stockpile
        Labs for sponsoring the Public Goods track.
      </p>
      <p>Also thanks to Mert, pls gib funding now thx xdd</p>
      <img
        src="/spam/9.png"
        alt="9"
        className="rounded-lg shadow-lg w-full mb-4"
      />
    </div>
  );
}
