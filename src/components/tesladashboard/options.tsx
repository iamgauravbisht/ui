export default function options() {
  return (
    <>
      <div className="flex flex-row justify-center items-center flex-grow">
        <label htmlFor="timeframe" className="text-sm">
          Timeframe:
        </label>
        <select id="timeframe" className="flex-grow">
          <option value="volvo">All</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className="flex flex-row justify-center items-center flex-grow ">
        <label htmlFor="people" className="text-sm">
          People:
        </label>
        <select id="people" className="flex-grow">
          <option value="volvo">All</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className="flex flex-row justify-center items-center flex-grow ">
        <label htmlFor="topic" className="text-sm">
          Topic:
        </label>
        <select id="topic" className="flex-grow">
          <option value="volvo">All</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </>
  );
}
