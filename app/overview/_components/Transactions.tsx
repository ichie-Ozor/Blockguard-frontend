import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { Ellipsis } from "lucide-react";
import React from "react";

const Transactions = () => {
  const transactions = [
    {
      title: "Stacked prize funds",
      date: "12 Oct. 2024",
      type: "Completed",
      prize: "10 ETH",
    },
    {
      title: "Participant payout",
      date: "12 Oct. 2024",
      type: "Completed",
      prize: "0.5 ETH",
    },
    {
      title: "Participant payout",
      date: "12 Oct. 2024",
      type: "Completed",
      prize: "0.5 ETH",
    },
    {
      title: "Participant payout",
      date: "12 Oct. 2024",
      type: "Completed",
      prize: "0.5 ETH",
    },
    {
      title: "Participant payout",
      date: "12 Oct. 2024",
      type: "Completed",
      prize: "0.5 ETH",
    },
    {
      title: "Participant payout",
      date: "12 Oct. 2024",
      type: "Completed",
      prize: "0.5 ETH",
    },
    {
      title: "Participant payout",
      date: "12 Oct. 2024",
      type: "Completed",
      prize: "0.5 ETH",
    },
    {
      title: "Participant payout",
      date: "12 Oct. 2024",
      type: "Completed",
      prize: "0.5 ETH",
    },
    {
      title: "Participant payout",
      date: "12 Oct. 2024",
      type: "Completed",
      prize: "0.5 ETH",
    },
  ];
  return (
    <div className="w-full text-nowrap">
      <div className="flex justify-between py-6 px-2 rounded-t-lg mb-5 border-[1.5px] border-[#E7E7E7]">
        <h3 className="text-[#5D5D5D] text-[18px] font-bold">
          Recent Transactions
        </h3>
        <h3 className="flex items-center text-[#5D5D5D] text-[18px] font-bold">
          See all{" "}
          <DoubleArrowRightIcon
            strokeWidth={10}
            className="ml-2 h-4 w-4 stroke-2"
          />
        </h3>
      </div>

      <div className="flex flex-col space-y-5 px-3 overflow-scroll md:overflow-hidden">
        {transactions.map((item, index) => (
          <div key={index} className="flex justify-between space-x-4 items-center">
            <div>
              <h3 className="font-bold text-[#454545]">{item.title}</h3>
              <p className="text-xs text-[#5D5D5D] mt-2">{item.date}</p>
            </div>

            <div className="flex items-center">
              <div className="w-2 h-2 mr-2 bg-[#43A047] rounded-full" />
              <p className="text-[#5D5D5D] text-sm">{item.type}</p>
            </div>

            <div>
              <p className="text-[#454545] font-bold">{item.prize}</p>
            </div>

            <div>
              <Ellipsis />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
