import React, { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import Link from "next/link";
import Account from "../../components/Account";
import ETHBalance from "../../components/ETHBalance";
import TokenBalance from "../../components/TokenBalance";
import MainTable from "../../components/MainTable";
import { ApiService } from "../../services/api";
const DAI_TOKEN_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";

//////////////// home page components ///////////////////////
////////// home page components /////////
import Header from "../../components/header/Header";
import Landing from "../../components/home/landing/Landing";
import Weekly from "../../components/home/weekly/Weekly";
import ProgressSection from "../../components/home/progress/Progress";
import Tokkens from "../../components/home/tokkens/Tokkens";
import Address from "../../components/home/addressShare/Address";
import LeaderBoard from "../../components/home/leaderBoard/LeaderBoard";

export default function HomePage() {
  const { account, library } = useWeb3React();

  const isConnected = typeof account === "string" && !!library;

  const exampleFunction = () => {
    return "example function";
  };

  return (
    <div>
      {/* <header>
        <nav>
          <Link href="/">
            <a>Innovatio Labs</a>
          </Link>

          <Account triedToEagerConnect={triedToEagerConnect} />
        </nav>
      </header> */}

      {/* <main>
        <h1>
          {" "}
          <a href="https://github.com/mirshko/next-web3-boilerplate">
            DAILY AMPLIFIER
          </a>
        </h1>
        <div>{exampleFunction()}</div>
        <MainTable />
        {isConnected && (
          <section>
            <ETHBalance />

            <TokenBalance tokenAddress={DAI_TOKEN_ADDRESS} symbol="DAI" />
          </section>
        )}
      </main> */}
      <Header />
      <Landing />
      <Weekly />
      <ProgressSection />
      <Tokkens />
      <Address />
      <LeaderBoard data={tableTestData} />
    </div>
  );
}

const tableTestData = [
  {
    rank: "Rank",
    address: "Address",
    total: "Total USD",
    count: "Count",
    basket: "Basket Share",
    pbb: "PBB",
    bonus: "Bonus Multiply",
    pab: "PAB",
  },
  {
    rank: "Rank",
    address: "Address",
    total: "Total USD",
    count: "Count",
    basket: "Basket Share",
    pbb: "PBB",
    bonus: "Bonus Multiply",
    pab: "PAB",
  },
  {
    rank: "Rank",
    address: "Address",
    total: "Total USD",
    count: "Count",
    basket: "Basket Share",
    pbb: "PBB",
    bonus: "Bonus Multiply",
    pab: "PAB",
  },
  {
    rank: "Rank",
    address: "Address",
    total: "Total USD",
    count: "Count",
    basket: "Basket Share",
    pbb: "PBB",
    bonus: "Bonus Multiply",
    pab: "PAB",
  },
  {
    rank: "Rank",
    address: "Address",
    total: "Total USD",
    count: "Count",
    basket: "Basket Share",
    pbb: "PBB",
    bonus: "Bonus Multiply",
    pab: "PAB",
  },
  {
    rank: "Rank",
    address: "Address",
    total: "Total USD",
    count: "Count",
    basket: "Basket Share",
    pbb: "PBB",
    bonus: "Bonus Multiply",
    pab: "PAB",
  },
];
