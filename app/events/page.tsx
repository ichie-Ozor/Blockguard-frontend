import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventPageList from "./_components/EventPageList";

const EventPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-6 px-2 rounded-t-lg mb-5">
        <h1 className="text-[#454545] font-semibold text-[40px] py-3">
          All Events
        </h1>
        <Link href="/create-event">
          <Button className="bg-[#0A2C66] font-bold text-sm">
            <Plus className="mr-0 md:mr-2 h-4 w-4" />{" "}
            <p className="hidden md:flex">Create New Event</p>
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="ongoing" className="w-full !bg-white">
        <TabsList className="bg-white">
          <TabsTrigger value="ongoing" className="!text-[#008365] bg-[#EAFFF6]">
            Ongoing Events (6)
          </TabsTrigger>
          <TabsTrigger value="review" className="!text-[#005EFF] bg-[#EBF9FF]">
            In Review (6)
          </TabsTrigger>
          <TabsTrigger
            value="completed"
            className="!text-[#FF6B35] bg-[#FF6B351F]"
          >
            Completed (6)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="ongoing">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <EventPageList />
          </div>
        </TabsContent>
        <TabsContent value="review">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <EventPageList />
          </div>
        </TabsContent>
        <TabsContent value="completed">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <EventPageList />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EventPage;
