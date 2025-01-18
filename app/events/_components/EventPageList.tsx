import Image1 from "@/assets/eventList/image1.png";
import Image2 from "@/assets/eventList/image2.png";
import Image3 from "@/assets/eventList/image3.png";
import Gift from "@/assets/eventList/gift.svg";
import Date from "@/assets/eventList/date.svg";
import People from "@/assets/eventList/people.svg";
import Image from "next/image";
import Link from "next/link";

const EventPageList = () => {
  const events = [
    {
      type: "Closed",
      image: Image1,
      title: "BlockGuard Hack",
      about:
        "These pages reflect a real-world, user-friendly blockchain platform that emphasizes trust, transparency, and automation. Let me know if you'd like more specific examples or additional features!",
      amount: "12,000USD",
      date: "Sept. 12 - Oct 13th",
      noOfParticipants: "105 participants",
    },
    {
      type: "Ongoing",
      image: Image2,
      title: "BlockGuard Hack",
      about:
        "These pages reflect a real-world, user-friendly blockchain platform that emphasizes trust, transparency, and automation. Let me know if you'd like more specific examples or additional features!",
      amount: "12,000USD",
      date: "Sept. 12 - Oct 13th",
      noOfParticipants: "105 participants",
    },
    {
      type: "Ongoing",
      image: Image3,
      title: "BlockGuard Hack",
      about:
        "These pages reflect a real-world, user-friendly blockchain platform that emphasizes trust, transparency, and automation. Let me know if you'd like more specific examples or additional features!",
      amount: "12,000USD",
      date: "Sept. 12 - Oct 13th",
      noOfParticipants: "105 participants",
    },
    {
      type: "Closed",
      image: Image3,
      title: "BlockGuard Hack",
      about:
        "These pages reflect a real-world, user-friendly blockchain platform that emphasizes trust, transparency, and automation. Let me know if you'd like more specific examples or additional features!",
      amount: "12,000USD",
      date: "Sept. 12 - Oct 13th",
      noOfParticipants: "105 participants",
    },
    {
      type: "Ongoing",
      image: Image1,
      title: "BlockGuard Hack",
      about:
        "These pages reflect a real-world, user-friendly blockchain platform that emphasizes trust, transparency, and automation. Let me know if you'd like more specific examples or additional features!",
      amount: "12,000USD",
      date: "Sept. 12 - Oct 13th",
      noOfParticipants: "105 participants",
    },
    {
      type: "Ongoing",
      image: Image2,
      title: "BlockGuard Hack",
      about:
        "These pages reflect a real-world, user-friendly blockchain platform that emphasizes trust, transparency, and automation. Let me know if you'd like more specific examples or additional features!",
      amount: "12,000USD",
      date: "Sept. 12 - Oct 13th",
      noOfParticipants: "105 participants",
    },
  ];
  return events.map((item, index) => (
    <Link key={index} href="/events/singlepageview">
      <div className="flex flex-col border-[1.5px] border-[#E7E7E7] rounded-lg cursor-pointer">
        <div className="md:min-w-[300px] md:min-h-[240px]">
          <Image
            src={item.image}
            alt="img"
            className="w-full h-full rounded-t-lg object-cover object-center"
          />
        </div>

        <div className="px-2 py-4">
          <h2 className="text-[#454545] font-bold text-[18px]">{item.title}</h2>
          <p className="text-[#454545] text-sm mt-2">{item.about}</p>
          <div className="flex items-center space-x-2 text-xs text-[#454545] mt-5">
            <Image src={Gift} alt="img" />
            <p>{item.amount}</p>
          </div>
          <div className="flex items-center space-x-2 text-xs text-[#454545] mt-3">
            <Image src={Date} alt="img" />
            <p>{item.date}</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center space-x-2 text-xs text-[#454545]">
              <Image src={People} alt="img" />
              <p>{item.noOfParticipants}</p>
            </div>
            <p className="text-xs underline text-[#00A479]">
              View Participants
            </p>
          </div>
        </div>
      </div>
    </Link>
  ));
};

export default EventPageList;
