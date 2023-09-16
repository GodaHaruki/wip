import { Difficulty } from "./Music";
import { SuggestMusics } from "./SuggestMusics";

export const InputDifficulty: React.FC<{
  diff?: Difficulty;
  setDiff: React.Dispatch<React.SetStateAction<Difficulty>>;
}> = ({ diff, setDiff }) => {
  return diff ? (
    <label className="w-full">
      difficulty
      <select
        className="
            select select-bordered 
            w-full
            focus:outline-none"
        onChange={(e) => setDiff(e.target.value as Difficulty)}
      >
        <option disabled>Difficulty</option>
        <option {...{ selected: diff == "ADV" ? true : false }}>
          ADV
        </option>{" "}
        <option {...{ selected: diff == "EXP" ? true : false }}>EXP</option>
        <option {...{ selected: diff == "MAS" ? true : false }}>MAS</option>
      </select>
    </label>
  ) : (
    <label className="w-full">
      difficulty
      <select
        className="
            select select-bordered 
            w-full
          focus:outline-none"
        onChange={(e) => setDiff(e.target.value as Difficulty)}
      >
        <option disabled selected>
          Difficulty
        </option>
        <option>ADV</option> <option>EXP</option>
        <option>MAS</option>
      </select>
    </label>
  );
};

export const InputMusicName: React.FC<{
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}> = ({ name, setName }) => {
  return (
    <label className="w-full">
      name
      <input
        type="text"
        className="
    input input-bordered
    w-full
    focus:outline-none"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        list="suggest"
      />
      <SuggestMusics inputId="suggest" q={name} />
    </label>
  );
};

export const InputScore: React.FC<{
  score: string;
  setScore: React.Dispatch<React.SetStateAction<string>>;
}> = ({ score, setScore }) => {
  return (
    <label className="block w-full">
      score
      <input
        type="number"
        placeholder="0"
        min={0}
        max={1010000}
        value={score}
        onChange={(e) => {
          const v = e.target.value;
          console.log(Math.floor(Number(v)).toString());
          setScore(Math.floor(Number(v)).toString());
        }}
        className="
      input input-bordered
      w-full
      focus:outline-none
      "
        list="scores"
      />
      <datalist id="scores">
        <option value={1009000}>SSS+</option>
        <option value={1007500}>SSS</option>
        <option value={1005000}>SS+</option>
        <option value={1000000}>SS</option>
        <option value={990000}>S+</option>
        <option value={975000}>S</option>
      </datalist>
    </label>
  );
};

export const InputCombo: React.FC<{
  combo: string;
  setCombo: React.Dispatch<React.SetStateAction<string>>;
}> = ({ combo, setCombo }) => {
  return (
    <label className="block w-full">
      combo
      <input
        type="number"
        placeholder="0"
        min={1}
        value={combo}
        onChange={(e) => {
          const v = e.target.value;
          console.log(Math.floor(Number(v)).toString());
          setCombo(Math.ceil(Number(v)).toString());
        }}
        className="
    input input-bordered
    w-full
    focus:outline-none
    "
      />
    </label>
  );
};
