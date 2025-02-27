"use client";

import MoneyIcon from "@/assets/eventList/money.svg";
import Image from "next/image";
// import FundsImg from "@/assets/overview/funds.png";
import ConnectWalletButton from "@/components/WalletConnect/ConnectWalletButton";
// import { useState } from "react";

const FundsOverview = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 w-full items-center">
      <div className="flex flex-col justify-between bg-white mt-4 lg:mt-0 border-[#D7D9E4] md:h-[280px] border rounded-lg shadow-sm p-6 w-full">
        {/* <div className="flex flex-row space-x-2 items-center">
          <div className="bg-[#D3EFFF] p-3 rounded-full">
            <Image src={MoneyIcon} alt="img" className="w-4 h-4" />
          </div>
          <h3 className="text-xs md:text-sm text-[#454545] text-center font-normal">
            Funds Overview
          </h3>
          <div>
            <ConnectWalletButton />
          </div>
        </div> */}
        <div className="flex flex-row items-center justify-between space-x-2">
          <div className="flex flex-row items-center space-x-2">
            <div className="bg-[#D3EFFF] p-3 rounded-full">
              <Image src={MoneyIcon} alt="img" className="w-4 h-4" />
            </div>
            <h3 className="text-xs md:text-sm text-[#454545] text-center font-normal">
              Funds Overview
            </h3>
          </div>
          <div className="ml-auto">
            <ConnectWalletButton />
          </div>
        </div>

        <div className="flex justify-between space-x-3 items-center mt-10">
          <div>
            <h3 className="text-xs md:text-sm text-[#454545] text-center font-normal">
              Total Funds Staked
            </h3>
            <h3 className="mt-2 text-[#454545] text-[20px] md:text-[30px] font-bold">
              25ETH
            </h3>
          </div>
          <div>
            <h3 className="text-xs md:text-sm text-[#454545] text-center font-normal">
              Total Payouts
            </h3>
            <h3 className="mt-2 text-[#454545] text-[20px] md:text-[30px] font-bold">
              10ETH
            </h3>
          </div>
          <div>
            <h3 className="text-xs md:text-sm text-[#454545] text-center font-normal">
              Pending Payouts
            </h3>
            <h3 className="mt-2 text-[#454545] text-[20px] md:text-[30px] font-bold">
              15ETH
            </h3>
          </div>
        </div>
      </div>
      {/* <div className="hidden md:flex space-x-3"> */}
      {/* <Link href="/setup">
          <Button className="bg-[#0A2C66]">
            <LogIn className="w-4 h-4 mr-2" /> Sign Up
          </Button>
        </Link>
        <Link href="/signin">
          <Button variant="outline" className="text-[#005544]">
            <LogIn className="w-4 h-4 mr-2" /> Sign In
          </Button>
        </Link> */}
      {/* <w3m-button /> */}

      {/* </div> */}

      {/* <Image src={FundsImg} alt="img" className="lg:max-w-[50%]" /> */}
    </div>
  );
};

export default FundsOverview;
