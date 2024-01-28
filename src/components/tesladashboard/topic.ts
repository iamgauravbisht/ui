import compliance from "@/assets/tesladashboard/compliance.png";
import food from "@/assets/tesladashboard/food.png";
import company from "@/assets/tesladashboard/company_networking.png";
import cyber from "@/assets/tesladashboard/cyber_security.png";
import covid from "@/assets/tesladashboard/covid_protocol.png";
import social from "@/assets/tesladashboard/social_media.png";

export type topicData = {
  title: string;
  img: any;
  percentage: number; // between 1-100
  id: string;
};
type dataset = {
  topic: string;
  data: topicData[];
};

export const datasetOne: dataset = {
  topic: "Weakest Topic",
  data: [
    {
      title: "Food Safety",
      img: food,
      percentage: 74,
      id: "owurwuio",
    },
    {
      title: "Compliance Basics Procedures",
      img: compliance,
      percentage: 52,
      id: "lajsfldjs",
    },
    {
      title: "Company Networking",
      img: company,
      percentage: 36,
      id: "lajkildjs",
    },
  ],
};

export const datasetTwo: dataset = {
  topic: "Strongest Topic",
  data: [
    {
      title: "Covid Protocol",
      img: covid,
      percentage: 95,
      id: "owurwuweer",
    },
    {
      title: "Cyber Security Basics",
      img: cyber,
      percentage: 92,
      id: "lajsfsfldjs",
    },
    {
      title: "Social Media Policy",
      img: social,
      percentage: 89,
      id: "lajsfoous",
    },
  ],
};
