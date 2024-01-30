// https://github.com/bigyanpatel/dashboard-clone
import GraphComponent from "@/components/tesladashboard/graph";
import CardTopic from "@/components/tesladashboard/cardTopic";
import UsersLeaderboard from "@/components/tesladashboard/usersLeaderboard";
import GroupsLeaderboard from "@/components/tesladashboard/groupsLeaderboard";
import Options from "@/components/tesladashboard/options";
import type { Metadata } from "next";
import { datasetOne, datasetTwo } from "@/components/tesladashboard/topic";
import { data as users } from "@/components/tesladashboard/users";
import { data as groups } from "@/components/tesladashboard/groups";

export const metadata: Metadata = {
  title: "Tesla Dashboard",
  description: "Tesla Dashboard",
};

import Graph from "/assets/tesladashboard/Graph.png";
import Image from "next/image";
const dataOne = [
  {
    heading: "Active Users",
    number: "27",
  },
  {
    heading: "Questions Answered",
    number: "3,298",
  },
  {
    heading: "Av. Session Length",
    number: "2m 34s",
  },
];
const dataTwo = [
  {
    heading: "Starting Knowledge",
    img: "/assets/tesladashboard/Graph.png",
  },
  {
    heading: "Current Knowledge",
    img: "/assets/tesladashboard/Graph.png",
  },
  {
    heading: "Knowledge Gain",
    img: "/assets/tesladashboard/Graph.png",
  },
];

function page() {
  return (
    <main className="">
      <div className="flex flex-row justify-between gap-4 mx-4 mt-6 flex-wrap">
        <Options />
      </div>

      <div className="flex flex-row justify-center lg:justify-between flex-wrap lg:flex-nowrap gap-2 mx-4 sm:mt-6 ">
        <div className="flex lg:flex-1 flex-col flex-wrap justify-between py-5 gap-3 ">
          <div className="flex flex-row justify-start gap-2 sm:gap-3 flex-wrap sm:flex-nowrap  ">
            {dataOne.map((item, i) => {
              return (
                <div className="flex flex-col gap-3 min-w-[100px]" key={i}>
                  <p className="text-sm">{item.heading}</p>
                  <div className="flex flex-row items-center">
                    <p className="text-lg font-bold">{item.number}</p>
                    {i == 0 ? <small className="text-sm ">/80</small> : null}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-row gap-2 sm:gap-3 flex-wrap sm:flex-nowrap">
            {dataTwo.map((item, i) => {
              return (
                <div className="flex flex-col gap-4 min-w-[100px]" key={i}>
                  <p className="text-sm">{item.heading}</p>
                  <div className="flex flex-row items-center">
                    <Image
                      src={item.img}
                      alt="img"
                      priority={true}
                      width={100}
                      height={70}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <GraphComponent />
        </div>
      </div>

      <div className="flex flex-row justify-between mx-4 flex-wrap">
        <CardTopic topic={datasetOne.topic} data={datasetOne.data} />
        <CardTopic topic={datasetTwo.topic} data={datasetTwo.data} />
      </div>

      <div className="flex flex-row justify-between mx-4 flex-wrap ">
        <UsersLeaderboard data={users} />
        <GroupsLeaderboard data={groups} />
      </div>
    </main>
  );
}

export default page;
