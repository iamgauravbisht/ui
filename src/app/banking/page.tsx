import Wallets from "@/components/banking/wallet";
import Transfer from "@/components/banking/transfer";
import Loan from "@/components/banking/loan";
import Close from "@/components/banking/close";
import Total from "@/components/banking/total";
import History from "@/components/banking/history";
export default function page() {
  return (
    <div className="w-full max-w-4xl mb-20">
      <Wallets />
      <div className="flex gap-2 mt-1 flex-wrap">
        <div className="flex-1 flex flex-col overflow-y-scroll border border-black p-2 max-h-[400px] min-w-[280px]">
          <History value="deposit" />
          <History value="withdraw" />
          <History value="deposit" />
          <History value="withdraw" />
          <History value="deposit" />
          <History value="withdraw" />
          <History value="deposit" />
          <History value="withdraw" />
          <History value="deposit" />
          <History value="withdraw" />
        </div>
        <div className="flex-1 flex flex-col gap-2 min-w-[280px] ">
          <Transfer />
          <Loan />
          <Close />
        </div>
      </div>
      <Total />
    </div>
  );
}
