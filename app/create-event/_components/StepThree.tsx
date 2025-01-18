import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import Done from "@/assets/eventList/done.svg";
import { Dispatch, SetStateAction } from "react";

const StepThree = ({
  setCurrentStep,
  eventData,
  onSubmitHandler,
}: // updateEventData,
{
  onSubmitHandler: () => void;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  eventData: {
    eventName: string;
    eventDescription: string;
    eventType: string;
    amount: number;
    endDate: Date;
    startDate: Date;
    prizeFundSource: string;
  };
  // updateEventData: (field: string, value: string) => void;
}) => {
  console.log(eventData, "confirmationxxx");
  const {
    amount,
    endDate,
    eventDescription,
    eventName,
    eventType,
    prizeFundSource,
    startDate,
  } = eventData;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  return (
    <div className="flex justify-center items-center min-h-[65vh] pt-10">
      <div className="max-w-[600px] w-full border-2 border-[#E7E7E7] rounded-[12px] md:rounded-[20px] px-2 py-8 md:p-8">
        <h1 className="text-[#0A2C66] text-[20px] text-center font-bold mb-6">
          Confirmation
        </h1>

        <div className="flex flex-col space-y-4">
          <div className="text-[#454545] text-sm">
            <p>Event Name:</p>
            <p className="font-bold">{eventName}</p>
          </div>
          <div className="text-[#454545] text-sm">
            <p>Event Description:</p>
            <p>{eventDescription}</p>
          </div>
          <div className="text-[#454545] text-sm">
            <p>Event Type:</p>
            <p className="font-bold">{eventType}</p>
          </div>
          <div className="text-[#454545] text-sm flex space-x-3 justify-between">
            <div>
              <p>Start date:</p>
              <p className="font-bold">{formatDate(startDate)}</p>
            </div>
            <div>
              <p>End date:</p>
              <p className="font-bold">{formatDate(endDate)}</p>
            </div>
          </div>
        </div>

        <div className="text-[#454545] text-sm mt-10">
          <div>
            <p>Amount:</p>
            <p className="font-bold mb-4">${amount}</p>
          </div>
          <div>
            <p>Prize fund source:</p>
            <p className="font-bold">{prizeFundSource}</p>
          </div>
        </div>

        <Dialog>
          <DialogTrigger className="w-full">
            <Button
              className="bg-[#0A2C66] w-full mt-7"
              onClick={() => onSubmitHandler()}
            >
              Create Event
            </Button>
          </DialogTrigger>
          <DialogContent>
            <div>
              <div className="flex justify-center items-center">
                <Image src={Done} alt="img" />
              </div>

              <h2 className="text-center text-[#0645A2] text-[18px] font-bold mt-5">
                Event Created Successfully!
              </h2>
              <p className="text-center text-[#454545] text-sm mt-1">
                &quot;Your event October Blockchain Hackathon has been created
                successfully! You have locked {amount} ETH as the prize pool,
                which is now securely staked in a smart contract.Participants
                can now start registering, and once the event ends, winners will
                automatically receive their payouts.&quot;
              </p>

              <div className="flex justify-center items-center">
                <div className="flex space-x-5 mt-10 w-full justify-center items-center max-w-2xl">
                  <Link href="/create-event" className="w-full">
                    <DialogClose className="w-full">
                      <Button
                        variant="outline"
                        className="text-[#0A2C66] w-full"
                        onClick={() => setCurrentStep(1)}
                      >
                        Create Another Event
                      </Button>
                    </DialogClose>
                  </Link>

                  <Link href="/events" className="w-full">
                    <DialogClose className="w-full">
                      <Button className="bg-[#0A2C66] w-full">
                        Manage Events
                      </Button>
                    </DialogClose>
                  </Link>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default StepThree;
