import { RankBadge } from "./Music";

export const RateDescription: React.FC<{}> = () => {
  return (
    <div className="mx-2 w-full">
      <ul className="mt-2 grid grid-cols-2">
        <li>
          <RankBadge rank="SSS+" />: const + 2.15
        </li>
        <li>
          <RankBadge rank="SSS" />: const + 2
        </li>
        <li>
          <RankBadge rank="SS+" />: const + 1.5
        </li>
        <li>
          <RankBadge rank="SS" />: const + 1
        </li>
        <li>
          <RankBadge rank="S+" />: const + 0.6
        </li>
        <li>
          <RankBadge rank="S" />: const
        </li>
      </ul>

      <div className="mx-2 my-4 w-full">
        <svg
          className="w-full fill-slate-400"
          strokeWidth="0.2"
          fontSize="1.3"
          viewBox="0 0 40 24"
        >
          <text x="0" y="22.5">
            0
          </text>
          <text x="0" y="16.5">
            0.6
          </text>
          <text x="0" y="12.5">
            1.0
          </text>
          <text x="0" y="7.5">
            1.5
          </text>
          <text x="0" y="2.5">
            2.0
          </text>
          <text x="0" y="1">
            2.15
          </text>

          <text x="0" y="24">
            975000
          </text>
          <text x="15" y="24">
            990000
          </text>
          <text x="26.65" y="24">
            0
          </text>
          <text x="31.2" y="24">
            50
          </text>
          <text x="33.8" y="24">
            75
          </text>
          <text x="35.3" y="24">
            90
          </text>

          {/* <path d="M 2 16 l 15 0 M 17 22 l 0 -6" className="stroke-warning"></path>
            <path d="M 2 12 l 25 0 M 27 22 l 0 -10" className="stroke-info"></path>
            <path d="M 2 7 l 30 0 M 32 22 l 0 -15" className="stroke-accent"></path>
            <path d="M 2 2 l 32.5 0 M 34.5 22 l 0 -20" className="stroke-secondary"></path>
            <path d="M 2 0.5 l 34 0 M 36 22 l 0 -21.5" className="stroke-primary"></path> */}

          <path d="M 17 22 l 0 -6" className="stroke-warning"></path>
          <path d="M 27 22 l 0 -10" className="stroke-info"></path>
          <path d="M 32 22 l 0 -15" className="stroke-accent"></path>
          <path d="M 34.5 22 l 0 -20" className="stroke-secondary"></path>
          <path d="M 36 22 l 0 -21.5" className="stroke-primary"></path>
          {/* <path d="M 37 22 l 0 -21.5" className="stroke-white"></path> */}

          <path d="M 2 22 l 25 -10" stroke="darkgray"></path>

          <path d="M 27 12 l 5 -5" stroke="darkgray"></path>

          <path d="M 32 7 l 2.5 -5" stroke="darkgray"></path>

          <path d="M 34.5 2 l 1.5 -1.5" stroke="darkgray"></path>

          {/* <text x="36" y="24" fontSize="1.3">90</text> */}
          <path d="M 36 0.5 l 1 0" stroke="darkgray"></path>
        </svg>
      </div>
    </div>
  );
};
