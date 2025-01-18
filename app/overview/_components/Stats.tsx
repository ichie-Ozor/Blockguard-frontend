import EventsImg from "@/assets/overview/events.svg";
import PrizeImg from "@/assets/overview/prize.svg";
import DateImg from "@/assets/overview/date.svg";
import Image from "next/image";

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3">
      <div className="bg-white border-[#D7D9E4] border rounded-lg shadow-sm p-6">
        <div className="flex flex-row space-x-2 items-center">
          <div className="bg-[#CDFEE8] p-3 rounded-full">
            <Image src={EventsImg} alt="img" />
          </div>
          <h3 className="text-sm text-[#454545] text-center font-normal">
            Total Events Created
          </h3>
        </div>
        <h3 className="mt-2 text-[#454545] text-[30px] font-bold">5 Events</h3>
      </div>
      <div className="bg-white border-[#D7D9E4] border rounded-lg shadow-sm p-6">
        <div className="flex flex-row space-x-2 items-center">
          <div className="bg-[#D3EFFF] p-3 rounded-full">
            <Image src={PrizeImg} alt="img" />
          </div>
          <h3 className="text-sm text-[#454545] text-center font-normal">
            Total Prize Funds Staked
          </h3>
        </div>
        <h3 className="mt-2 text-[#454545] text-[30px] font-bold">15 ETH</h3>
      </div>
      <div className="bg-white border-[#D7D9E4] border rounded-lg shadow-sm p-6">
        <div className="flex flex-row space-x-2 items-center">
          <div className="bg-[#FF6B351F] p-3 rounded-full">
            <Image src={DateImg} alt="img" />
          </div>
          <h3 className="text-sm text-[#454545] text-center font-normal">
            Active Events
          </h3>
        </div>
        <h3 className="mt-2 text-[#454545] text-[30px] font-bold">
          3 Ongoing Events
        </h3>
      </div>
    </div>
  );
};

export default Stats;
