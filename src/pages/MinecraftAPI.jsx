import { useState, useEffect } from "react";
import { getMinecraftData } from "../components/fetchApi";
import axios from "axios";
import { httpHelper } from "../helper/httpHelper";
import McTable from "../components/McTable";
import MCcards from "../components/MCcards";
export default function MinecraftAPI() {
  const [minecraft, setMinecraft] = useState([]);

  let api = httpHelper();

  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const fetchMinecraft = async () => {
    try {
      let url = "http://localhost:3001/data";
      api.get(url).then(res => {
        console.log(res);
        setMinecraft(res);
      });
    } catch (error) {}
  };

  useEffect(() => {
    fetchMinecraft();
  }, []);

  return (
    <>
      <h1 className="main-container">Minecraft API</h1>
      <div className="mcAccordion">
        {minecraft.map((minecraft, i) => {
          return (
            <>
              <MCcards minecraft={minecraft} key={minecraft.name} />
            </>
          );
        })}
      </div>
      {/* <McTable minecraft={minecraft} /> */}
    </>
  );
}
