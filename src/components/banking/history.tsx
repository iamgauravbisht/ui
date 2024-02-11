export default function history({ value }: { value: string }) {
  return (
    <div className="w-full flex justify-between items-center border border-black px-4 py-3 mb-2 bg-white">
      <div className="flex flex-wrap gap-2 text-sm items-center">
        <p
          className={`px-4 py-1 rounded-xl font-semibold ${
            value == "deposit"
              ? "bg-gradient-to-r from-green-400 to-teal-500"
              : null
          } ${
            value == "withdraw"
              ? "bg-gradient-to-r from-pink-500 to-red-600"
              : null
          }`}
        >
          1 Deposit
        </p>
        <p>3 days ago</p>
      </div>
      <div> {new Intl.NumberFormat("en-IN").format(1300)} ₹</div>
    </div>
  );
}
