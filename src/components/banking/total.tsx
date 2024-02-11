export default function total() {
  return (
    <div className="flex flex-wrap justify-between items-center w-full my-2 border border-black rounded-lg p-2">
      <div className="flex gap-2 items-center space-x-2 flex-wrap ">
        <div className="flex gap-1 items-center">
          <p className="text-sm ">In</p>
          <p className="text-xl font-bold">
            {new Intl.NumberFormat("en-IN").format(1300)} ₹
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <p className="text-sm">Out</p>
          <p className="text-xl font-bold">
            {new Intl.NumberFormat("en-IN").format(1300)} ₹
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <p className="text-sm ">Interest</p>
          <p className="text-xl font-bold">
            {new Intl.NumberFormat("en-IN").format(1300)} ₹
          </p>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <label
            htmlFor="sorting"
            className="block text-sm font-medium text-gray-900"
          >
            Sort
          </label>
          <select
            id="sorting"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
          >
            <option value="new">new</option>
            <option value="old">old</option>
            <option value="ascending">ascending</option>
            <option value="descending">descending</option>
          </select>
        </div>
      </div>
      <p className="text-sm">you will be logout in 5 minutes</p>
    </div>
  );
}
//in out interest sort
