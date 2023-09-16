import { FC } from "react";
import { Header } from "./pages/Header";
import { FindMusic } from "./pages/FindMusic";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Rating } from "./pages/Rating";
import { Border } from "./pages/Border";

export const App: FC<{}> = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<FindMusic />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/border" element={<Border />} />
          <Route path="/*" element={<FindMusic />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
