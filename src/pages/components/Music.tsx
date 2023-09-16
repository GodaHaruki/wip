import { Link } from "react-router-dom";

export type Difficulty = "ADV" | "EXP" | "MAS";
export type Genre = "ORIGINAL" | "ゲキマイ" | "イロドリミドリ";

export interface MusicProps {
  name: string;
  diff: Difficulty;
  genre: Genre;
  cons: number;
}

export const MusicTable: React.FC<{ musics: MusicProps[] }> = ({ musics }) => {
  return (
    <table className="table w-full">
      <thead>
        <tr className="grid w-full grid-cols-12 break-words">
          <th className="col-span-4">Name</th>
          <th className="col-span-2">Diff</th>
          <th className="col-span-2">Const</th>
          <th className="col-span-3">Genre</th>
          <th className="col-span-1">to</th>
        </tr>
      </thead>
      <tbody>
        {musics.map((i) => (
          <Music key={`${i.name}_${i.diff}`} {...i} />
        ))}
      </tbody>
    </table>
  );
};

const Music: React.FC<MusicProps> = (props) => {
  return (
    <tr className="grid w-full grid-cols-12 break-words">
      <td className="col-span-4">{props.name}</td>
      <td className="col-span-2">{props.diff}</td>
      <td className="col-span-2">{props.cons}</td>
      <td className="col-span-3">{props.genre}</td>
      <td className="col-span-1 text-center">
        <Link to={"/rating"} state={{ defaultMusic: props }}>
          ▶
        </Link>
      </td>
    </tr>
  );
};

export type Rank = "SSS+" | "SSS" | "SS+" | "SS" | "S+" | "S";
export const RankBadge: React.FC<{ rank: Rank | string }> = ({ rank }) => {
  switch (rank) {
    case "SSS+":
      return <span className="badge badge-primary">SSS+</span>;
    case "SSS":
      return <span className="badge badge-secondary">SSS</span>;
    case "SS+":
      return <span className="badge badge-accent">SS+</span>;
    case "SS":
      return <span className="badge badge-info">SS</span>;
    case "S+":
      return <span className="badge badge-warning">S+</span>;
    case "S":
      return <span className="badge badge-warning">S</span>;
    default:
      return <span className="badge">SSS+</span>;
  }
};

export const calcRating: (
  cons: number,
  score: number
) => { rating: number; rank: string } = (cons: number, score: number) => {
  //SSS+
  if (score >= 1009000) {
    return { rating: cons + 2.15, rank: "SSS+" };
  } else if (score >= 1007500) {
    // SSS
    return { rating: cons + 2 + (score - 1007500) / 10000, rank: "SSS" };
  } else if (score >= 1005000) {
    // SS+
    return { rating: cons + 1.5 + (score - 1005000) / 5000, rank: "SS+" };
  } else if (score >= 1000000) {
    // SS
    return { rating: cons + 1 + (score - 1000000) / 7500, rank: "SS" };
  } else if (score >= 990000) {
    return { rating: cons + (score - 975000) / 25000, rank: "S+" };
  } else if (score >= 975000) {
    // S
    return { rating: cons + (score - 975000) / 25000, rank: "S" };
  } else {
    // under S
    return { rating: 0, rank: "ゴミ" };
  }
};

export const getScoreFromRank = (rank: Rank | string) => {
  switch (rank) {
    case "SSS+":
      return 1009000;
    case "SSS":
      return 1007500;
    case "SS+":
      return 1005000;
    case "SS":
      return 1000000;
    case "S+":
      return 990000;
    case "S":
      return 975000;
    default:
      return 0;
  }
};

const makeUrlParameter = (q: string) => {
  if (q == "" || q == undefined) {
    return "";
  }

  const sep = q.split(" ");

  const p: string[] = [];
  const qu: string[] = [];

  sep.forEach((s) => {
    if (s.includes("genre:")) {
      p.push(`genre=${s.slice(6)}`);
    } else if (s.includes("diff:")) {
      p.push(`diff=${s.slice(5)}`);
    } else if (s.includes("cons:")) {
      p.push(`cons=${s.slice(5)}`);
    } else {
      qu.push(`${s}`);
    }
  });

  if (p.length == 0) {
    return `q=${qu.join(" ")}`;
  } else {
    return `q=${qu.join(" ")}&${p.join("&")}`;
  }
};

export const useMusics = (q: string = "") => {
  const p = q ? makeUrlParameter(q) : "";

  console.log(p);

  const url =
    "https://script.google.com/macros/s/AKfycbxRt5InUTUSHoTfPC302qkJ3MFnMvhUFJeNb20JubIz3xE28j9oSLylQPLWKO1mKyNW/exec";
  return fetch(`${url}?${p}`).then((j) => j.json() as Promise<MusicProps[]>);
};

// export const useMusics = (q: string = "") => {
//   const musics = localStorage.getItem("musics");

//   if (!musics) {
//     const p = q ? makeUrlParameter(q) : "";
//     fetch(`${url}`)
//       .then((j) => j.json() as Promise<MusicProps[]>)
//       .then((m) => localStorage.setItem("musics", JSON.stringify(m)));

//     console.log(p);

//     return fetch(`${url}?${p}`).then((j) => j.json() as Promise<MusicProps[]>);
//   } else {
//     const m = JSON.parse(musics) as MusicProps[];

//     const sep = q.split(" ");

//     const p: any = {};
//     const qu: string[] = [];

//     sep.forEach((s) => {
//       if (s.includes("genre:")) {
//         p["genre"] = s.slice(6);
//       } else if (s.includes("diff:")) {
//         p["diff"] = s.slice(5);
//       } else if (s.includes("cons:")) {
//         p["cons"] = s.slice(5);
//       } else {
//         qu.push(`${s}`);
//       }
//     });
//   }
// };
