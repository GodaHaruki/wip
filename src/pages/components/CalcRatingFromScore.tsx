import { useState } from "react";
import { InputDifficulty, InputMusicName, InputScore } from "./Input";
import { calcRating, Difficulty, MusicProps, useMusics } from "./Music";

export const CalcRatingFromScore: React.FC<{ defaultMusic?: MusicProps }> = ({
  defaultMusic = {
    name: "",
    diff: undefined,
    genre: undefined,
    cons: undefined,
  },
}) => {
  console.log(defaultMusic);
  const [score, setScore] = useState<string>("");
  const [music, setMusic] = useState<MusicProps>(defaultMusic as any);

  const [diff, setDiff] = useState<Difficulty>(
    defaultMusic.diff ? defaultMusic.diff : (undefined as any)
  );

  const [rating, setRating] = useState<number>(0);
  const [rank, setRank] = useState<string>("");

  const handleSubmit = () => {
    if (!diff) {
      setMusic({
        name: music.name,
        diff: undefined as any,
        genre: undefined as any,
        cons: 0,
      });
      setRating(0);
      return;
    }

    useMusics(music.name + " " + "diff:" + diff)
      .then((m) => {
        if (m.length == 0) {
          throw Error("Music not found");
        } else {
          return m[0];
        }
      })
      .then((m) => {
        setMusic(m);
        return m;
      })
      .then((m) => calcRating(m.cons, Number(score)))
      .then((r) => {
        setRating(Number(r.rating.toFixed(3)));
        setRank(r.rank);
      })
      .catch((_) => console.log("error"));
  };

  return (
    <div
      className="
      col-span-6
      grid grid-cols-6
      gap-4
      "
    >
      <div className="col-span-2">
        <InputDifficulty diff={diff} setDiff={setDiff} />
      </div>

      <div className="col-span-4">
        <InputMusicName
          name={music.name}
          setName={(v) => {
            setMusic({
              name: v as string,
              genre: undefined,
              diff: undefined,
              cons: undefined,
            } as any);
            setRating(0);
          }}
        />
      </div>

      <div className="col-span-6">
        <InputScore score={score} setScore={setScore} />
      </div>
      <button
        className="
        btn btn-primary
        col-span-6"
        onClick={handleSubmit}
      >
        Calculate
      </button>

      <div className="breadcrumbs col-span-6">
        <ul className="grid w-full grid-cols-6">
          <li className="col-span-2 w-full">Const: {music.cons}</li>
          <li className="col-span-2 w-full">Rank: {rank}</li>
          <li className="col-span-2 w-full">Rating: {rating}</li>
        </ul>
      </div>
    </div>
  );
};
