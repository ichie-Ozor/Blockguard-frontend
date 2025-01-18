import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";
import { useState } from "react";

const StepOne = ({
  setCurrentStep,
  eventData,
  updateEventData,
}: {
  setCurrentStep: Dispatch<SetStateAction<number>>;
  eventData: {
    eventName: string;
    eventDescription: string;
    eventType: string;
    startDate: Date;
    endDate: Date;
  };
  updateEventData: (field: string, value: string | Date) => void;
}) => {
  const [errors, setErrors] = useState({
    startDate: "",
    endDate: "",
  });
  const handleStartDateChange = (value: string) => {
    const selectedDate = new Date(value);
    const currentDate = new Date();

    if (selectedDate < currentDate) {
      setErrors((prev) => ({
        ...prev,
        startDate: "start date cannot be earlier than today.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, startDate: "" }));
      updateEventData("startDate", selectedDate);
    }
  };

  const handleEndDateChange = (value: string) => {
    const selectedDate = new Date(value);

    if (selectedDate < eventData.startDate) {
      setErrors((prev) => ({
        ...prev,
        endDate: "End date cannot be earlier than the start date.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, endDate: "" }));
      updateEventData("endDate", selectedDate);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-[65vh] pt-10">
      <div className="max-w-[600px] w-full border-2 border-[#E7E7E7] rounded-[12px] md:rounded-[20px] px-2 py-8 md:p-8">
        <h1 className="text-[#0A2C66] text-[20px] text-center font-bold mb-6">
          Create New Event
        </h1>

        <div className="flex flex-col">
          <label className="text-[#454545] text-sm">Event Name:</label>
          <input
            className="rounded-[8px] bg-[#FCFCFC] border-2 border-[#E7E7E7] text-sm px-2 py-2"
            placeholder="Event Name"
            value={eventData.eventName}
            onChange={(e) => updateEventData("eventName", e.target.value)}
          />
        </div>

        <div className="flex flex-col mt-7">
          <label className="text-[#454545] text-sm">Event Description:</label>
          <textarea
            className="rounded-[8px] bg-[#FCFCFC] border-2 border-[#E7E7E7] text-sm px-2 py-2"
            placeholder="Describe the Event"
            value={eventData.eventDescription}
            onChange={(e) =>
              updateEventData("eventDescription", e.target.value)
            }
          />
        </div>

        <div className="flex flex-col mt-7">
          <label className="text-[#454545] text-sm">Event Type:</label>
          <select
            className="rounded-[8px] bg-[#FCFCFC] border-2 border-[#E7E7E7] text-sm px-2 py-2"
            value={eventData.eventType}
            onChange={(e) => updateEventData("eventType", e.target.value)}
          >
            <option value="">Select Type</option>
            <option value="Hackathon">Hackathon</option>
            <option value="Seminar">Seminar</option>
            <option value="Webinar">Webinar</option>
          </select>
        </div>

        <div className="flex flex-col mt-7">
          <label className="text-[#454545] text-sm">Start Date:</label>
          <input
            type="date"
            className="rounded-[8px] bg-[#FCFCFC] border-2 border-[#E7E7E7] text-sm px-2 py-2"
            placeholder="Start Date"
            value={eventData.startDate.toISOString().split("T")[0]}
            onChange={(e) => handleStartDateChange(e.target.value)}
          />
          {errors.startDate && (
            <p className="text-red-500 text-xs mt-1">{errors.startDate}</p>
          )}
        </div>

        <div className="flex flex-col mt-7">
          <label className="text-[#454545] text-sm">End Date:</label>
          <input
            type="date"
            className="rounded-[8px] bg-[#FCFCFC] border-2 border-[#E7E7E7] text-sm px-2 py-2"
            placeholder="End Date"
            value={eventData.endDate.toISOString().split("T")[0]}
            onChange={(e) => handleEndDateChange(e.target.value)}
          />
          {errors.endDate && (
            <p className="text-red-500 text-xs mt-1">{errors.endDate}</p>
          )}
        </div>
        <Button
          className="bg-[#0A2C66] w-full mt-7"
          onClick={() => setCurrentStep(2)}
          disabled={!!errors.startDate || !!errors.endDate}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default StepOne;
