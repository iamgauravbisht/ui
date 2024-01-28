import Image from "next/image";
import React from "react";

type Props = {
  topic: string;
  data: {
    title: string;
    img: string;
    percentage: number;
    id: string;
  }[];
};

export default function CardTopic({ topic, data }: Props) {
  return (
    <div className="p-3 flex flex-col gap-3 flex-1">
      <h4 className="text-sm font-semibold text-gray-500 ">{topic}</h4>
      {data.map((item) => {
        return (
          <div
            className="flex flex-row gap-3 mb-4 text-sm min-w-64 text-nowrap"
            key={item.id}
          >
            <Image src={item.img} alt="img" width={50} height={50} />
            <div className="flex flex-col w-full">
              <h5 className="font-semibold text-wrap">{item.title}</h5>
              <div className=" h-2 bg-orange-300 rounded-xl">
                <div
                  className={`bg-orange-500 h-full rounded-xl`}
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
            <div className="flex flex-row gap-1 items-end">
              <p className="font-semibold">{item.percentage}%</p>
              <p className="font-semibold text-gray-500 ">correct</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
