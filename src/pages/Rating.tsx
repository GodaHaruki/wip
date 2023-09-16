import { useLocation } from "react-router-dom";
import { CalcRatingFromScore } from "./components/CalcRatingFromScore";
import { RateDescription } from "./components/RateDescription";

export const Rating: React.FC<{}> = () => {
  return (
    <div
      className="
    mt-5 grid grid-cols-6 gap-4 lg:grid-cols-12"
    >
      <div className="col-span-6 lg:col-span-5">
        <div className="hidden lg:block">
          <RateDescription />
        </div>

        <div tabIndex={0} className="collapse bg-base-200 lg:hidden">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">About Rating</div>
          <div className="collapse-content">
            <RateDescription />
          </div>
        </div>
      </div>

      <div className="col-span-6 lg:col-span-7">
        <CalcRatingFromScore defaultMusic={useLocation().state?.defaultMusic} />
      </div>
    </div>
  );
};

// const Tools: React.FC<{
//   selected: React.ReactNode;
//   setTool: React.Dispatch<React.SetStateAction<React.ReactNode>>;
// }> = ({ selected, setTool }) => {
//   const tools: { [key: string]: React.ReactNode } = {
//     "calc rating from score": <CalcRatingFromScore />,
//   };

//   return (
//     <div className="w-full">
//       <ul className="w-full">
//         {Object.keys(tools).map((t) => (
//           <li
//             className="border-b border-primary-content"
//             onClick={() => setTool(tools[t])}
//           >
//             {t}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
