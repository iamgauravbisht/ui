import Image from "next/image";

type Props = {
  data: {
    name: string;
    message: string;
    personImg: any;
    arrowImg: any;
    id: string;
  }[];
};

export default function usersLeaderboard({ data }: Props) {
  return (
    <div className="p-3 flex flex-col gap-3 flex-1">
      <h4 className="text-sm font-semibold text-gray-500 my-5 ">
        Users Leaderboard
      </h4>
      {data.map((item, i) => {
        return (
          <div
            className="flex flex-row justify-between text-sm min-w-56 mb-2"
            key={item.id}
          >
            <div className="flex flex-row gap-3 items-center">
              <Image src={item.personImg} alt={"img"} />
              <div className="flex flex-col ">
                <p className="font-semibold ">{item.name}</p>
                <p className="font-normal  text-gray-500 ">{item.message}</p>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-end">
              <p className="font-semibold">{i + 1}</p>
              <Image src={item.arrowImg} alt="up/down" className="mb-1" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
