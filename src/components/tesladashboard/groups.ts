// import up from "/assets/tesladashboard/UpArrow.png";
// import down from "/assets/tesladashboard/DownArrow.png";

type Data = {
  name: string;
  message: string;
  arrowImg: any;
  id: string;
}[];

export const data: Data = [
  {
    name: "Houston Facility",
    message: "52 Points/User-97% Correct",
    arrowImg: "/assets/tesladashboard/UpArrow.png",
    id: "a",
  },
  {
    name: "Test Group",
    message: "52 Points/User-95% Correct",
    arrowImg: "/assets/tesladashboard/DownArrow.png",
    id: "ab",
  },
  {
    name: "Sales Leadership",
    message: "52 Points/User 87% Correct",
    arrowImg: "/assets/tesladashboard/UpArrow.png",
    id: "abc",
  },
  {
    name: "Northeast Region",
    message: " 52 Points/User-97% Correct",
    arrowImg: "/assets/tesladashboard/UpArrow.png",
    id: "abcd",
  },
];
