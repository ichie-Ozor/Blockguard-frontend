import Image1 from "@/assets/eventList/image1.png";
import Image2 from "@/assets/eventList/image2.png";
import Image3 from "@/assets/eventList/image3.png";
import Image4 from "@/assets/eventList/image4.png";
import Image5 from "@/assets/eventList/image5.png";
import Gift from "@/assets/eventList/gift.svg";
import Date from "@/assets/eventList/date.svg";
import People from "@/assets/eventList/people.svg";
import Image from "next/image";

const EventList = () => {
  const events = [
    {
      type: "Closed",
      image: Image1,
      title: "BlockGuard Hack",
      about: "Companies lock funds in smart contracts, ensuring transparency.",
      amount: "12,000USD",
      date: "Sept. 12 - Oct 13th",
      noOfWinners: "5 winners",
    },
    {
      type: "Ongoing",
      image: Image2,
      title: "BlockGuard Hack",
      about: "Companies lock funds in smart contracts, ensuring transparency.",
      amount: "12,000USD",
      date: "Sept. 12 - Oct 13th",
      noOfWinners: "5 winners",
    },
    {
      type: "Ongoing",
      image: Image3,
      title: "BlockGuard Hack",
      about: "Companies lock funds in smart contracts, ensuring transparency.",
      amount: "12,000USD",
      date: "Sept. 12 - Oct 13th",
      noOfWinners: "5 winners",
    },
    {
      type: "Ongoing",
      image: Image4,
      title: "BlockGuard Hack",
      about: "Companies lock funds in smart contracts, ensuring transparency.",
      amount: "12,000USD",
      date: "Sept. 12 - Oct 13th",
      noOfWinners: "5 winners",
    },
    {
      type: "Ongoing",
      image: Image5,
      title: "BlockGuard Hack",
      about: "Companies lock funds in smart contracts, ensuring transparency.",
      amount: "12,000USD",
      date: "Sept. 12 - Oct 13th",
      noOfWinners: "5 winners",
    },
  ];
  return (
    <div className="pt-10">
      <h1 className="font-bold text-[20px] mb-5 text-[#0A2C66]">Events</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-3">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative cursor-pointer rounded-[16px] border-[1.5px] border-[#E7E7E7] shadow-md"
          >
            <div
              className={`absolute top-2 left-2 ${
                event.type == "Closed" ? "text-[#E53935]" : "text-[#43A047]"
              } bg-white rounded-full text-[12px] px-3 py-1`}
            >
              {event.type}
            </div>
            <div className="w-full">
              <Image
                src={event.image}
                alt="img"
                className="rounded-t-[16px] w-full"
              />
            </div>

            <div className="py-4 px-3">
              <h2 className="text-[#1E1E1E] font-bold">{event.title}</h2>
              <p className="text-[14px] text-[#454545]">{event.about}</p>
              <div className="flex space-x-2 items-center text-[11px] text-[#454545] mt-2">
                <Image src={Gift} alt="img" />
                <p>{event.amount}</p>
              </div>
              <div className="flex space-x-2 items-center text-[11px] text-[#454545] mt-2">
                <Image src={Date} alt="img" />
                <p>{event.date}</p>
              </div>
              <div className="flex space-x-2 items-center text-[11px] text-[#454545] mt-2">
                <Image src={People} alt="img" />
                <p>{event.noOfWinners}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
