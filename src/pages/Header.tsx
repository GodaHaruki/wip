import { FC } from "react";
import { Link } from "react-router-dom";

export const Header: FC<{ isLogined?: boolean }> = ({ isLogined }) => {
  return (
    <div
      className="
    text-bg sticky
    top-0 
    z-10 grid grid-cols-12
    gap-4
    bg-info-content px-4 py-2
    "
    >
      <div className="col-span-2 ml-3">Tools</div>
      <div className="col-span-4" />
      <div className="col-span-2 text-center">
        <Link to={"/music"}>Music</Link>
      </div>
      <div className="col-span-2 text-center">
        <Link to={"/rating"}>Rating</Link>
      </div>
      <div className="col-span-2 text-center">
        <Link to={"/border"}>Border</Link>
      </div>
    </div>
  );
};
