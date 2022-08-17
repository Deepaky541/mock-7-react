import React from "react";
import { Route, Routes } from "react-router-dom";
import Allpage from "./Allpage";
import Csspage from "./Csspage";
import HtmlPage from "./HtmlPage";
import Jspage from "./Jspage";


export const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/all" element={<Allpage />} />
        <Route path="/css" element={<Csspage />} />
        <Route path="/html" element={<HtmlPage />} />
        <Route path="/js" element={<Jspage />} />
      </Routes>
    </div>
  );
};
