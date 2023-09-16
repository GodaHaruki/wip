import { useEffect, useState } from "react";
import { useMusics } from "./Music";

export const SuggestMusics: React.FC<{
  inputId: string;
  q: string;
  maxSuggests?: number;
}> = ({ inputId, q = "", maxSuggests = 50 }) => {
  const [suggests, setSuggests] = useState<React.ReactNode[]>();

  // return useMemo(() => {

  useEffect(() => {
    useMusics(q).then((ms) =>
      setSuggests(
        ms
          .slice(0, maxSuggests)
          .map((m) => <option key={`${m.name}_${m.diff}`}>{m.name}</option>)
      )
    );
  }, [q]);

  return <datalist id={inputId}>{suggests}</datalist>;
  // }, [inputId, q, maxSuggests])
};
