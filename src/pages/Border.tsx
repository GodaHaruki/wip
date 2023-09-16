import { useEffect, useState } from "react";
import { ScoreDescription } from "./components/ScoreDescription";
import { InputCombo, InputScore } from "./components/Input";

export const Border: React.FC<{}> = () => {
  const [combo, setCombo] = useState<string>("");
  const [score, setScore] = useState<string>("");

  const [borders, setBorders] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const c = Number(combo);
    const s = Number(score);
    if (!c || !s) {
      setBorders([]);
      console.log("skip");
      return;
    }

    if (s > 1010000) {
      setBorders([]);
      console.log("skip");
      return;
    }

    const j = getJusticeCount(s, c);

    const a = Math.floor(j / 51);

    console.log(a);

    const res = [...new Array(a + 1)].map((_, i) => {
      if (c - (j - i * 51) - (i % 2) - Math.floor(i / 2) < 0) {
        return undefined;
      }
      return (
        <tr key={i}>
          <td>{c - (j - i * 51) - (i % 2) - Math.floor(i / 2)}</td>
          <td>{j - i * 51}</td>
          <td>{i % 2}</td>
          <td>{Math.floor(i / 2)}</td>
        </tr>
      );
    });

    setBorders(res.reverse());
  }, [combo, score]);

  return (
    <div className="relative mt-4 grid grid-cols-6 gap-4 lg:grid-cols-12">
      <div className="col-span-6 hidden lg:block">
        <div className="top-0 hidden pt-8 lg:sticky lg:block">
          <div className="w-full">
            <ScoreDescription combo={combo} />
          </div>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse sticky col-span-6 bg-base-200 lg:hidden"
      >
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">About Rating</div>
        <div className="collapse-content">
          <ScoreDescription combo={combo} />
        </div>
      </div>

      <div className="col-span-6 mx-5 grid grid-cols-6 gap-4">
        <div className="col-span-2">
          <InputCombo combo={combo} setCombo={setCombo} />
        </div>
        <div className="col-span-4"></div>
        <div className="col-span-6">
          <InputScore score={score} setScore={setScore} />
        </div>

        <div className="col-span-6 mt-5">
          <table className="table">
            <thead>
              <tr>
                <th>JUSTICE CRITICAL</th>
                <th>JUSTICE</th>
                <th>ATTACK</th>
                <th>MISS</th>
              </tr>
            </thead>
            <tbody>{borders}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export const getJusticeCount = (score: number, combo: number) => {
  const diff = 1010000 - score;

  const jc = 1010000 / combo;
  const j = jc / 1.01;

  return Math.round(diff / (jc - j));
};
