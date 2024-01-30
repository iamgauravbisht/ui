// import up from "../../assets/tesladashboard/UpArrow.png";
// import down from "../../assets/tesladashboard/DownArrow.png";
// import thomas from "../../assets/tesladashboard/thomas.png";
// import thisal from "../../assets/tesladashboard/thisal.png";
// import lura from "../../assets/tesladashboard/lura.png";
// import helen from "../../assets/tesladashboard/helen.png";

type Data = {
  name: string;
  message: string;
  personImg: string;
  arrowImg: string;
  id: string;
}[];

export const data: Data = [
  {
    name: "Jesse Thomas",
    message: "637 Points - 98% Correct",
    personImg: "/assets/tesladashboard/thomas.png",
    arrowImg: "/assets/tesladashboard/UpArrow.png",
    id: "a",
  },
  {
    name: "Thisal Mathiyazhagan",
    message: "637 Points - 89% Correct",
    personImg: "/assets/tesladashboard/thisal.png",
    arrowImg: "/assets/tesladashboard/DownArrow.png",
    id: "ab",
  },
  {
    name: "Helen Chuang",
    message: "637 Points - 88% Correct",
    personImg: "/assets/tesladashboard/helen.png",
    arrowImg: "/assets/tesladashboard/UpArrow.png",
    id: "abc",
  },
  {
    name: "Lura Silverman",
    message: "637 Points - 87% Correct",
    personImg: "/assets/tesladashboard/lura.png",
    arrowImg: "/assets/tesladashboard/UpArrow.png",
    id: "abcde",
  },
];
