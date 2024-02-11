export default function loan() {
  return (
    <div className="p-5 rounded-lg bg-gradient-to-r from-green-400 to-teal-500">
      <h1 className="font-bold mb-2">Request Loan</h1>
      <div className="flex gap-4 items-center flex-wrap">
        <div className="flex flex-col gap-1 justify-center items-center ">
          <input
            type="number"
            id="amount"
            className="px-2 py-1 text-sm max-w-32 bg-transparent border border-black rounded-md"
          />
          <label htmlFor="amount" className="text-sm">
            Loan
          </label>
        </div>
        <button className="border border-black px-2 py-1 rounded-full hover:bg-gradient-to-r from-green-400 to-teal-500 hover:text-white">
          {"->"}
        </button>
      </div>
    </div>
  );
}
