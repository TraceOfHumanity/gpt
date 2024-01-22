import "./index.css";

import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { Aside } from "./components/Aside";
import { StarsAnimation } from "./components/CanvasBg";
import { setTheme } from "./redux/features/themeSlice";
import { getTheme } from "./utils/functions";

import { sendMsgToOpenAI } from "./openai";

function App() {
  const dispatch = useDispatch();
  console.log(process.env.REACT_APP_OPENAI_API_KEY);

  const [input, setInput] = useState("");

  const handleSend = async () => {
    const res = await sendMsgToOpenAI(input);
    console.log(res);
  };

  useEffect(() => {
    const theme = getTheme();
    document.documentElement.classList.toggle(`${theme}`);
    dispatch(setTheme(theme));
  }, []);

  return (
    <div className=" h-screen w-screen dark:text-cyan-100 flex gap-2">
      <StarsAnimation />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[90vw] h-[80vh] flex gap-2 ">
        <Aside />
        <div className="border-[1px] border-slate-950 rounded-3xl w-full backdrop-blur-md dark:border-gray-300">
          123
        </div>
      </div>
    </div>
  );
}

export default App;
