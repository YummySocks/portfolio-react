import { useEffect, useState } from "react";
import {
  featuredPortfolio,
  webPortfolio
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
  ];


  return (
    <div>
     
    </div>
  );
}