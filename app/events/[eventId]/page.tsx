// import Image1 from "@/assets/eventList/image1.png";
// import Image from "next/image";
// import Gift from "@/assets/eventList/gift.svg";
// import Date from "@/assets/eventList/date.svg";
// import People from "@/assets/eventList/people.svg";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Pen } from "lucide-react";

// const EventSinglePage = () => {
//   return (
//     <div className="pt-5">
//       <div className="max-h-[50vh]">
//         <Image
//           src={Image1}
//           alt="img"
//           className="rounded-2xl w-full max-h-[50vh] object-cover object-center"
//         />
//       </div>

//       <p className="text-[#454545] mt-3">
//         These pages reflect a real-world, user-friendly blockchain platform that
//         emphasizes trust, transparency, and automation. Let me know if
//         you&apos;d like more specific examples or additional features!
//       </p>

//       <div className="flex items-center space-x-2 text-xs text-[#454545] mt-8">
//         <Image src={Date} alt="img" />
//         <p>Sept. 12 - Oct 13th</p>
//       </div>

//       <div className="flex items-center space-x-2 text-xs text-[#454545] mt-5">
//         <Image src={Gift} alt="img" />
//         <p>
//           Prize Pool: <span className="font-bold">15 ETH</span>
//         </p>
//       </div>

//       <ul className="text-xs text-[#454545] mt-5 space-y-1 ml-6 list-disc">
//         <li>1st Prize: 5 ETH</li>
//         <li>2nd Prize: 3 ETH</li>
//         <li>3rd Prize: 2 ETH</li>
//         <li>4th Prize: 1.5ETH</li>
//         <li>5th Prize: 1 ETH</li>
//         <li>6th -15th Prize : 2.5 ETH Prize pool</li>
//       </ul>
//       <p className="text-xs text-[#454545] mt-2">
//         Note: To be paid out equally to Individual members of each team.
//       </p>

//       <div className="flex justify-between items-center mt-8">
//         <div className="flex items-center space-x-2 text-xs text-[#454545]">
//           <Image src={People} alt="img" />
//           <p className="font-bold">105 Participants</p>
//         </div>
//         <p className="text-xs underline text-[#00A479]">View Participants</p>
//       </div>

//       <div className="flex justify-center items-center">
//         <div className="flex space-x-5 mt-10 w-full justify-center items-center max-w-2xl">
//           <Link href="/signin" className="w-full">
//             <Button variant="outline" className="text-[#005544] w-full">
//               <Pen className="w-4 h-4 mr-2" /> Edit
//             </Button>
//           </Link>

//           <Link href="/setup" className="w-full">
//             <Button className="bg-[#0A2C66] w-full">Manage</Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventSinglePage;
"use client";
import React from "react";
import { useRouter } from "next/router";
import Image1 from "@/assets/eventList/image1.png";
import Image from "next/image";
import Gift from "@/assets/eventList/gift.svg";
import Date from "@/assets/eventList/date.svg";
import People from "@/assets/eventList/people.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";

// Example function to fetch event data
const fetchEventData = async (eventId: string) => {
  // Example of fetching event data by eventId (replace with your API call)
  console.log(eventId);
  return {
    eventName: "Blockchain Tournament",
    startDate: "Sept. 12 - Oct 13th",
    prizePool: "15 ETH",
    participants: 105,
    prizes: [
      "1st Prize: 5 ETH",
      "2nd Prize: 3 ETH",
      "3rd Prize: 2 ETH",
      "4th Prize: 1.5 ETH",
      "5th Prize: 1 ETH",
      "6th-15th Prize: 2.5 ETH Prize pool",
    ],
  };
};

// Generate Static Params function for static export
export const generateStaticParams = async () => {
  // Fetch the list of eventIds. This is just an example; you should replace this with real data.
  const eventIds = ["event1", "event2", "event3"]; // Replace with actual event ID fetching logic
  return eventIds.map((eventId) => ({
    eventId: eventId,
  }));
};

const EventSinglePage = () => {
  const router = useRouter();
  const { eventId } = router.query;

  const [eventData, setEventData] = React.useState<any>(null);

  React.useEffect(() => {
    if (eventId) {
      fetchEventData(eventId as string).then((data) => {
        setEventData(data);
      });
    }
  }, [eventId]);

  if (!eventData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-5">
      <div className="max-h-[50vh]">
        <Image
          src={Image1}
          alt="img"
          className="rounded-2xl w-full max-h-[50vh] object-cover object-center"
        />
      </div>

      <p className="text-[#454545] mt-3">
        {eventData.eventName} is a real-world, user-friendly blockchain platform
        event that emphasizes trust, transparency, and automation.
      </p>

      <div className="flex items-center space-x-2 text-xs text-[#454545] mt-8">
        <Image src={Date} alt="img" />
        <p>{eventData.startDate}</p>
      </div>

      <div className="flex items-center space-x-2 text-xs text-[#454545] mt-5">
        <Image src={Gift} alt="img" />
        <p>
          Prize Pool: <span className="font-bold">{eventData.prizePool}</span>
        </p>
      </div>

      <ul className="text-xs text-[#454545] mt-5 space-y-1 ml-6 list-disc">
        {eventData.prizes.map((prize, index) => (
          <li key={index}>{prize}</li>
        ))}
      </ul>
      <p className="text-xs text-[#454545] mt-2">
        Note: To be paid out equally to individual members of each team.
      </p>

      <div className="flex justify-between items-center mt-8">
        <div className="flex items-center space-x-2 text-xs text-[#454545]">
          <Image src={People} alt="img" />
          <p className="font-bold">{eventData.participants} Participants</p>
        </div>
        <p className="text-xs underline text-[#00A479]">View Participants</p>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex space-x-5 mt-10 w-full justify-center items-center max-w-2xl">
          <Link href="/signin" className="w-full">
            <Button variant="outline" className="text-[#005544] w-full">
              <Pen className="w-4 h-4 mr-2" /> Edit
            </Button>
          </Link>

          <Link href="/setup" className="w-full">
            <Button className="bg-[#0A2C66] w-full">Manage</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventSinglePage;
