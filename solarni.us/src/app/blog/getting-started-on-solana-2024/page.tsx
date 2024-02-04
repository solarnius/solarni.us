import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting Started on Solana in 2024",
  description: "What you need to know about getting started on Solana in 2024.",
};

export default async function Page() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2">
        <img
          src="/intro/header.webp"
          alt="header"
          className="rounded-lg shadow-lg mb-4 w-full"
        />
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter">
          Getting Started on Solana in 2024
        </h1>
        <h2 className="text-2xl font-medium tracking-tighter">
          A practical guide to getting started on the best blockchain of all
          time.
        </h2>
        <p className="text-xs">
          Published Feb 4, 2024 by{" "}
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
        <li>
          <a href="#conclusion" className="underline">
            Conclusion
          </a>
        </li>
      </ol>
      <h2 className="text-2xl font-bold tracking-tighter mb-[-8px]" id="intro">
        1. Introduction - Why Solana?
      </h2>
      <p>
        I&apos;ve bounced around between a few different chains--Ethereum,
        Algorand, XRP, and more. Solana is where I&apos;ve ended up, for a few
        reasons that I&apos;ll list below.
      </p>
      <p>
        <span className="font-bold">Speed</span> - Solana is blazingly fast,
        with thousands of transactions per second happening right now and a
        sub-second time between blocks.
      </p>
      <p>
        <span className="font-bold">Fees</span> - Solana is incredibly cheap.
        Average fees right now are less than $0.01 per transaction, so you
        don&apos;t have to worry about burning hundreds of dollars in gas.
      </p>
      <p>
        <span className="font-bold">Ecosystem</span> - Solana has a thriving
        ecosystem of Defi tools, NFT marketplaces, and more. It&apos;s a great
        place to be a consumer.
      </p>
      <p>
        <span className="font-bold">Developer Adoption</span> - Many chains have
        great numbers on paper but have no developers building for them. Solana
        has a rich developer community, which shows in the rate of quality
        projects being shipped.
      </p>
      <p>
        Ultimately, I think Solana is one of the most interesting chains in
        2024. The tech is great and getting better, the developer community is
        strong, and consumer adoption feels like it&apos;s just around the
        corner with the advent of Solana Mobile and other interesting
        initiatives. It&apos;s at least worth setting up a wallet and giving it
        a shot.
      </p>
      <h2 className="text-2xl font-bold tracking-tighter mb-[-8px]" id="wallet">
        2. Wallet Setup
      </h2>
      <p>
        In order to get started on Solana, you&apos;ll need a wallet. A wallet
        is a piece of software that stores your on-chain identity and lets you
        access and move your assets.
      </p>
      <p>
        Solana wallets, like many other chains, are mostly in the form of
        browser extensions and mobile apps. There are two major wallets that are
        popular in 2024:
      </p>
      <ul className="list-disc list-inside">
        <li>
          <a
            href="https://phantom.app/"
            target="_blank"
            rel="noreferrer noopener"
            className="underline"
          >
            Phantom
          </a>{" "}
          - My wallet of choice, Phantom has a great browser extension and
          mobile app that allows you to manage multiple accounts.
        </li>
        <li>
          <a
            href="https://solflare.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="underline"
          >
            Solflare
          </a>{" "}
          - The first wallet that I used, Solflare is similarly great to
          Phantom. They have the same features, just pick the UI you like
          better.
        </li>
      </ul>
      <p>
        There are other great alternatives for different use-cases out there.{" "}
        <a
          href="https://backpack.app/"
          target="_blank"
          rel="noreferrer noopener"
          className="underline"
        >
          Backpack
        </a>{" "}
        is the new kid on the block, giving access to new NFT features.{" "}
        <a
          href="https://wallet.magiceden.io/"
          target="_blank"
          rel="noreferrer noopener"
          className="underline"
        >
          Magic Eden
        </a>{" "}
        has another NFT-specific app that has been recently released.
      </p>
      <p>
        However, most users today are using either Phantom or Solflare.
        We&apos;ll go through the process of setting up a wallet on Solflare,
        but all wallets should follow similar procedures.
      </p>
      <h3 className="text-lg font-bold tracking-tighter mb-[-8px]">
        Step 1: Install the App
      </h3>
      <img
        src="/intro/1.png"
        alt="header"
        className="rounded-lg shadow-lg w-full"
      />
      <p>
        Download Solflare on your device of choice using the links on their
        official website:{" "}
        <a
          href="https://solflare.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="underline"
        >
          solflare.com
        </a>
        . We&apos;re adding it as a Chrome extension here, which is the most
        popular way to use it on desktop/laptop computers.
      </p>
      <h3 className="text-lg font-bold tracking-tighter mb-[-8px]">
        Step 2: Create a New Wallet
      </h3>
      <img
        src="/intro/2.png"
        alt="header"
        className="rounded-lg shadow-lg w-full"
      />
      <p>
        Click &quot;I need a new wallet&quot; to create a wallet for the first
        time. If you want to import this wallet onto other devices in the
        future, you&apos;ll select the other option.
      </p>
      <h3 className="text-lg font-bold tracking-tighter mb-[-8px]">
        Step 3: Back Up Your Recovery Phrase
      </h3>
      <img
        src="/intro/3.png"
        alt="header"
        className="rounded-lg shadow-lg w-full"
      />
      <p>
        <span className="font-bold">
          THIS IS IMPORTANT: DO NOT EVER SHARE YOUR RECOVERY PHRASE.
        </span>{" "}
        Your recovery phrase can be used to &quot;log in&quot; to your account
        from any device. It can never be changed. Think of it like a permanent
        password to your bank account. If a hacker gets hold of your recovery
        phrase, they can take all of your assets from you. So, write it down on
        paper and save it in a safe place (preferably, literally a safe).
      </p>
      <p>
        It&apos;s annoying to write down words on paper and store it, but it
        will save your wallet if your computer ever dies or gets stolen.
      </p>
      <h3 className="text-lg font-bold tracking-tighter mb-[-8px]">
        Step 4: Confirm Your Recovery Phrase
      </h3>
      <img
        src="/intro/4.png"
        alt="header"
        className="rounded-lg shadow-lg w-full"
      />
      <p>
        Solflare asks you to confirm your recovery phrase so that they can be
        sure that you will be able to recover your account in the future. You
        only ever have to do this once.
      </p>
      <h3 className="text-lg font-bold tracking-tighter mb-[-8px]">
        Step 5: Set a Password
      </h3>
      <img
        src="/intro/5.png"
        alt="header"
        className="rounded-lg shadow-lg w-full"
      />
      <p>
        Your password is used to encrypt your recovery phrase on your device.
        You&apos;ll need to enter it to unlock your wallet after unlocking your
        computer, so make sure it&apos;s something memorable. You can always
        change this in the future.
      </p>
      <h3 className="text-lg font-bold tracking-tighter mb-[-8px]">
        Step 6: Open the Solflare Extension
      </h3>
      <img
        src="/intro/6.png"
        alt="header"
        className="rounded-lg shadow-lg w-full"
      />
      <p>
        Your wallet should now be set up! You can find Solflare under your
        extensions in the top bar of Chrome. You might want to pin it if you
        have a lot of extensions.
      </p>
      <h3 className="text-lg font-bold tracking-tighter mb-[-8px]">
        Step 7: Access Your Wallet
      </h3>
      <img
        src="/intro/7.png"
        alt="header"
        className="rounded-lg shadow-lg w-full"
      />
      <p>
        Clicking on Solflare should show you your wallet! Congrats: you now have
        an on-chain identity, and can send and receive SOL, tokens, NFTs, and
        more! Welcome to the Solana ecosystem, we&apos;re glad you&apos;re here.
      </p>
      <h2
        className="text-2xl font-bold tracking-tighter mb-[-8px]"
        id="funding"
      >
        3. Funding Your Wallet
      </h2>
      <p>
        Your balance is at $0.00, so you&apos;ll need to get some SOL
        transferred over to fund your account. In order to do that, you&apos;ll
        need to open an account at a cryptocurrency exchange.
      </p>
      <p>
        There are a ton of cryptocurrency exchanges. They all do pretty much the
        same thing. My exchange of choice in 2024 is Kraken -- and if you sign
        up using my referral link and trade $100, we both get $10 worth of
        Bitcoin:{" "}
        <a
          href="https://kraken.app.link/Dcn48Z2sUGb"
          target="_blank"
          className="underline"
        >
          Sign Up for Kraken (referral)
        </a>
        .
      </p>
      <img
        src="/intro/buy.png"
        alt="header"
        className="rounded-lg shadow-lg w-full"
      />
      <p>
        Once you&apos;ve signed up for an account and deposited funds,
        you&apos;ll want to buy some SOL.
      </p>
      <div className="flex">
        <img
          src="/intro/withdraw.png"
          alt="header"
          className="rounded-lg shadow-lg w-1/2"
        />
        <img
          src="/intro/deposit.png"
          alt="header"
          className="rounded-lg shadow-lg w-1/2"
        />
      </div>
      <p>
        After buying SOL, you&apos;ll want to add your Solana address as a
        withdrawal address (found under Transfer &gt; Withdraw). Copy and paste
        it from your Solflare wallet (found under Deposit). Make sure that you
        either copy and paste or scan the QR code: Solana addresses are hard to
        write by hand, and even one character wrong will result in your money
        going to somebody else.
      </p>
      <p>
        Once you&apos;ve withdrawn your SOL, it&apos;s time to start exploring
        how to put it to work!
      </p>
      <h2
        className="text-2xl font-bold tracking-tighter mb-[-8px]"
        id="staking"
      >
        4. Staking Your SOL
      </h2>
      <p>
        One of the best parts about the Solana ecosystem is that you can earn a
        nice return on your Solana just by staking it! Staking means that you
        hold onto your Solana and give validators (the computers running the
        network) your share of the vote.
      </p>
      <p>
        There are two ways to stake your SOL: either directly with a validator,
        or through Liquid Staking. Staking your SOL directly through a validator
        is simple, and can be done through any wallet app.
      </p>
      <img
        src="/intro/stake.png"
        alt="header"
        className="rounded-lg shadow-lg w-full"
      />
      <p>
        In Solflare, you can find staking by clicking your Solana balance. You
        can then choose a validator to stake with; Solflare runs their own, with
        a current annual yield of 7.66%.
      </p>
      <img
        src="/intro/stake2.png"
        alt="header"
        className="rounded-lg shadow-lg w-full"
      />
      <p>
        Staking SOL with a validator will lock up your tokens until you unstake
        them; you can unstake them at any time, but it might take a while due to
        constraints. This means that you should only stake SOL that you
        don&apos;t plan on using for a while.
      </p>
      <p>
        Because it can be inconvenient to have withdrawals take some time,
        liquid staking has become very popular. With liquid staking, you convert
        your SOL into a liquid staking token (popular tokens include mSOL,
        JitoSOL, and bSOL). The creators of these tokens automatically pool the
        staked SOL, so the token increases in value over time relative to SOL at
        the rate of the staking yield.
      </p>
      <p>
        With liquid staking, you also don&apos;t hold onto your SOL, but you get
        new tokens with which you can earn yield. This is a great way to earn
        more than you would by just holding onto and staking your SOL.
      </p>
      <p>
        To get started with liquid staking, you can convert your SOL with one of
        the following (I personally tend to use Jito):
      </p>
      <ul className="list-inside list-disc">
        <li>
          <a
            href="https://www.jito.network/"
            target="_blank"
            rel="noreferrer noopener"
            className="underline"
          >
            Jito
          </a>
        </li>
        <li>
          <a
            href="https://solblaze.org/"
            target="_blank"
            rel="noreferrer noopener"
            className="underline"
          >
            SolBlaze
          </a>
        </li>
        <li>
          <a
            href="https://marinade.finance/"
            target="_blank"
            rel="noreferrer noopener"
            className="underline"
          >
            Marinade
          </a>
        </li>
      </ul>
      <p>Once converted, you can use your tokens in the rich defi ecosystem!</p>
      <h2 className="text-2xl font-bold tracking-tighter mb-[-8px]" id="defi">
        5. Defi
      </h2>
      <p>
        Defi, or decentralized finance, are the tools that you can use to trade
        and earn on Solana. Solana has, in my opinion, some of the best tools in
        all of crypto. We&apos;ll go through a few of the most popular ones and
        how to use them.
      </p>

      <h3 className="text-lg font-bold tracking-tighter mb-[-8px]">
        Jupiter -{" "}
        <a href="https://jup.ag/" target="_blank" className="underline">
          jup.ag
        </a>
      </h3>
      <img
        src="/intro/jup.png"
        alt="header"
        className="rounded-lg shadow-lg w-full"
      />
      <p>
        Jupiter is a suite of defi products, but at its core it is an aggregator
        of exchanges to help you swap from one token to another. If you want to
        sell your SOL and buy a memecoin (like BONK), Jupiter will try to find
        you the best price across all exchanges to do so.
      </p>
      <p>
        Jupiter also offers tools to help you cost average (DCA), place limit
        orders, use leverage (perpetual), and they have a new launchpad for
        tokens launching on the ecosystem.
      </p>
      <p>
        Jupiter is one of the most trusted names on Solana, and most active
        Solana users interact with it almost daily.
      </p>

      <h3 className="text-lg font-bold tracking-tighter mb-[-8px]">
        MarginFi -{" "}
        <a
          href="https://app.marginfi.com/"
          target="_blank"
          className="underline"
        >
          marginfi.com
        </a>
      </h3>
      <img
        src="/intro/mfi.png"
        alt="header"
        className="rounded-lg shadow-lg w-full"
      />
      <p>
        MarginFi is a decentralized lending platform. Depositing tokens to
        MarginFi will earn you a yield, and you can take out a loan against your
        assets. Depositing tokens to MarginFi is a great way to earn extra yield
        on them: bSOL, the wrapped token for staked SOL from SolBlaze, currently
        yields 3.34% for lending it out. So, by swapping your SOL for bSOL and
        then lending it out, you can earn additional yield all around.
      </p>

      <h3 className="text-lg font-bold tracking-tighter mb-[-8px]">
        Raydium -{" "}
        <a href="https://raydium.io/" target="_blank" className="underline">
          raydium.io
        </a>
      </h3>
      <img
        src="/intro/raydium.png"
        alt="header"
        className="rounded-lg shadow-lg w-full"
      />
      <p>
        Raydium is another suite of defi products. What differentiates them from
        Jupiter is that rather than being an aggregator across exchanges, they
        operate an exchange themselves. Raydium has pools that you can provide
        liquidity to and earn yield on, and you can also swap in these pools.
        Just be careful of impermanent loss when providing liquidity!
      </p>

      <h3 className="text-lg font-bold tracking-tighter mb-[-8px]">
        Kamino -{" "}
        <a
          href="https://app.kamino.finance/"
          target="_blank"
          className="underline"
        >
          kamino.finance
        </a>
      </h3>
      <img
        src="/intro/kamino.png"
        alt="header"
        className="rounded-lg shadow-lg w-full"
      />
      <p>
        Kamino is a new kid on the block when it comes to Solana Defi, but it
        has some really interesting ideas. Kamino offers lending and borrowing
        like MarginFi, but their core product is liquidity provision. Users
        deposit assets into Kamino vaults and Kamino uses them to distribute
        liquidity across pools and earn yield. You lose control compared to
        putting this liquidity yourself, and you still run the risk of
        impermanent loss, but it can be a great way to earn yield on your assets
        if you want to provide liquidity in a more hands-off approach.
      </p>

      <h3 className="text-lg font-bold tracking-tighter mb-[-8px]">
        Meteora -{" "}
        <a href="https://meteora.ag/" target="_blank" className="underline">
          meteora.ag
        </a>
      </h3>
      <img
        src="/intro/meteora.png"
        alt="header"
        className="rounded-lg shadow-lg w-full"
      />
      <p>
        Another new kid on the block, Meteora is turning heads with their DLMM
        liquidity pools. With DLMMs, liquidity is provided in bins, so your
        liquidity only trades at the prices you think are appropriate. This also
        means that you only earn fees when the asset is trading in these bins.
        Some of the biggest launches on Solana recently have been in Meteora
        DLMM pools, and they are a great way to earn some extra yield - just be
        sure you understand what you&apos;re signing up for!
      </p>

      <h3 className="text-lg font-bold tracking-tighter mb-[-8px]">Other</h3>
      <p>
        There are many other amazing defi products in the Solana ecosystem that
        I&apos;m sure you&apos;ll run across as you explore. This is just a good
        starting point.
      </p>

      <h2 className="text-2xl font-bold tracking-tighter mb-[-8px]" id="nfts">
        6. NFTs
      </h2>
      <p>
        There are two main exchanges for trading NFTs on Solana: Tensor, and
        Magic Eden.
      </p>
      <h3 className="text-lg font-bold tracking-tighter mb-[-8px]">
        Tensor -{" "}
        <a href="https://tensor.trade/" target="_blank" className="underline">
          tensor.trade
        </a>
      </h3>
      <img
        src="/intro/tensor.png"
        alt="header"
        className="rounded-lg shadow-lg w-full"
      />
      <p>
        Tensor is the most popular NFT marketplace on Solana. They have an
        intuitive UI, support all of the major NFT standards like compressed
        NFTs, and have a great team and community. I use Tensor almost
        exclusively for trading my NFTs.
      </p>

      <h3 className="text-lg font-bold tracking-tighter mb-[-8px]">
        Magic Eden -{" "}
        <a href="https://magiceden.io/" target="_blank" className="underline">
          magiceden.io
        </a>
      </h3>
      <img
        src="/intro/magiceden.png"
        alt="header"
        className="rounded-lg shadow-lg w-full"
      />
      <p>
        Magic Eden is the OG Solana marketplace for NFTs. They still drive huge
        liquidity and are making moves with the announcement of their new token
        and wallet.
      </p>

      <h2
        className="text-2xl font-bold tracking-tighter mb-[-8px]"
        id="community"
      >
        7. Community
      </h2>
      <p>
        The Solana community is thriving and active, but you have to find them!
        There is no real &quot;Solana Twitter&quot; or &quot;Solana
        Discord&quot; that will give you a sense of true community. Instead, you
        have to find the projects and communities that you are interested in and
        join their Discords, follow their Twitters, and join their Telegrams.
      </p>
      <p>
        What separates good projects from great ones is their community. So, do
        some exploring, and find your people! It can be really rewarding to be
        part of a community, supporting the same things.
      </p>
      <h2 className="text-2xl font-bold tracking-tighter mb-[-8px]" id="scams">
        8. Scams to Avoid
      </h2>
      <p>
        Unfortunately, Solana (like many ecosystems) is full of scammers and
        hackers trying to take your money. Here are a few scams to watch out
        for:
      </p>

      <h3 className="text-lg font-bold tracking-tighter mb-[-8px]">
        Fake Projects on Twitter
      </h3>
      <img
        src="/intro/fakejup.png"
        alt="header"
        className="rounded-lg shadow-lg w-full"
      />
      <p>
        Malicious actors will pose as real projects on twitter, buying gold
        checkmarks and followers and engagement to look real. They&apos;ll link
        to a site, usually with promise of a &quot;free airdrop&quot;, but
        signing a transaction on the link will drain your wallet of all of its
        assets.
      </p>
      <p>
        Avoid this scam by verifying that the projects socials are official and
        that the link is the real link. Don&apos;t trust, verify!
      </p>

      <h3 className="text-lg font-bold tracking-tighter mb-[-8px]">
        Fake NFT Drops
      </h3>
      <img
        src="/intro/fakenft.png"
        alt="header"
        className="rounded-lg shadow-lg w-full"
      />
      <p>
        If you trade on Solana, you will see some compressed NFTs landing in
        your wallet promising &quot;5000 USDC&quot; etc. These are fake NFTs,
        and if you go to their site and sign a transaction, you will lose all of
        your assets.
      </p>
      <p>
        If someone sends you an NFT for free and it seems too good to be true,
        it is. No major projects will ever do an announcement of an airdrop like
        this. Just ignore the NFT and move on.
      </p>

      <h3 className="text-lg font-bold tracking-tighter mb-[-8px]">
        Fake Helpers/Traders
      </h3>
      <img
        src="/intro/faketrader.png"
        alt="header"
        className="rounded-lg shadow-lg w-full"
      />
      <p>
        If you start being active in communities, scammers might start to DM you
        offering help or to trade for your assets. They will ask you for your
        seed phrase or send you a link for a &quot;swap&quot;. Don&apos;t ever
        give them your seed phrase or click on a link that isn&apos;t from a
        recognized, major project.
      </p>
      <p>Remember: if it seems too good to be true, it probably is!</p>

      <h2
        className="text-2xl font-bold tracking-tighter mb-[-8px]"
        id="conclusion"
      >
        9. Conclusion
      </h2>
      <p>
        Solana is an incredible, vibrant ecosystem with huge opportunities to
        earn and join amazing communities. There are awesome Defi tools, NFT
        exchanges, and amazing projects. Hopefully, this guide has given you a
        starting point for you to explore this awesome blockchain.
      </p>
      <hr />
      <h2 className="text-lg font-bold tracking-tighter mb-[-8px]" id="scams">
        Sources
      </h2>
      <ul className="list-disc list-inside">
        <li>Header image by DALL-E</li>
        <li>All other screenshots by author</li>
        <li>
          Solana Speed/Cost Stats:{" "}
          <a href="https://solscan.io/" className="underline">
            Solscan
          </a>
          ,
          <a
            href="https://dune.com/asdlkjfasldkfja/solana-fee-analysis"
            className="underline"
          >
            Dune
          </a>
        </li>
        <li>
          Staking info: <a href="https://solana.com/staking">Solana Staking</a>
        </li>
        <li>All other links provided inline.</li>
      </ul>
    </div>
  );
}
