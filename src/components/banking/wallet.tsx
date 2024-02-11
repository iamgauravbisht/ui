"use client";
import { useEffect, useState } from "react";

export default function Wallets() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      return setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full border-black border rounded-xl flex flex-wrap justify-between items-center p-5 ">
      <div>
        <h1 className="text-xl font-semibold">Current Balance</h1>
        <p>as of {time ? time.toLocaleTimeString() : null}</p>
      </div>
      <h1 className="text-4xl ">
        {new Intl.NumberFormat("en-IN").format(978394)} ₹
      </h1>
    </div>
  );
}
