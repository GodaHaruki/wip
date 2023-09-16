import { useState } from "react";
import { MusicProps, MusicTable, useMusics } from "./components/Music";

export const FindMusic: React.FC<{}> = () => {
  const [musics, setMusics] = useState<MusicProps[]>([]);
  const [query, setQuery] = useState<string>("");

  const onSearch = (_e: any): void => {
    useMusics(query)
      .then((j) => {
        setMusics(j);
        return j;
      })
      .then((_) => console.log(_));
  };

  return (
    <div
      className="
    mx-10 mt-10
    grid grid-cols-12
    "
    >
      <input
        type="text"
        className="
        input input-bordered
        col-span-8 col-start-2
        focus:outline-none
      "
        placeholder="...LAMIA genre:ゲキマイ diff:MAS cons:15.1"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="
      btn
      col-span-2
      w-full
      "
        onClick={(e) => onSearch(e)}
      >
        <svg
          className="h-2/3 w-full"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="80"
            cy="80"
            r="60"
            stroke="white"
            stroke-width="10"
            fill="none"
          ></circle>
          <path
            d="M 122.8 122.8 l 50 50"
            stroke="white"
            stroke-width="9"
          ></path>
        </svg>
      </button>

      <div className="col-span-12">
        <p className="mb-2 mt-5 text-center">Result</p>
        <div>
          <MusicTable musics={musics} />
        </div>
      </div>
    </div>
  );
};
