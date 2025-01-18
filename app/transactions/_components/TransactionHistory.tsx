import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const transactions = [
  {
    description: "Participant: Block.0xnerd",
    transaction_id: "0x123abc...",
    event: "October Blockchain Hackathon",
    amount: "0.5ETH",
    date: "Oct. 12 2024",
    status: "Completed",
  },
  {
    description: "Participant: Block.0xnerd",
    transaction_id: "0x123abc...",
    event: "October Blockchain Hackathon",
    amount: "0.5ETH",
    date: "Oct. 12 2024",
    status: "Completed",
  },
  {
    description: "Participant: Block.0xnerd",
    transaction_id: "0x123abc...",
    event: "October Blockchain Hackathon",
    amount: "0.5ETH",
    date: "Oct. 12 2024",
    status: "Completed",
  },
  {
    description: "Participant: Block.0xnerd",
    transaction_id: "0x123abc...",
    event: "October Blockchain Hackathon",
    amount: "0.5ETH",
    date: "Oct. 12 2024",
    status: "Completed",
  },
  {
    description: "Participant: Block.0xnerd",
    transaction_id: "0x123abc...",
    event: "October Blockchain Hackathon",
    amount: "0.5ETH",
    date: "Oct. 12 2024",
    status: "Completed",
  },
  {
    description: "Participant: Block.0xnerd",
    transaction_id: "0x123abc...",
    event: "October Blockchain Hackathon",
    amount: "0.5ETH",
    date: "Oct. 12 2024",
    status: "Completed",
  },
];

const TransactionHistory = () => {
  return (
    <div className="pt-10">
      <h3 className="text-[18px] text-[#454545] font-bold mb-4">
        Transaction History
      </h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Description</TableHead>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Event</TableHead>
            <TableHead className="">Amount</TableHead>
            <TableHead className="">Date</TableHead>
            <TableHead className="">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow key={index} className="text-[#454545]">
              <TableCell className="">{transaction.description}</TableCell>
              <TableCell>{transaction.transaction_id}</TableCell>
              <TableCell>{transaction.event}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>
                {transaction.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionHistory;
