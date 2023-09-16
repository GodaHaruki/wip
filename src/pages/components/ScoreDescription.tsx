export const ScoreDescription: React.FC<{ combo: string }> = ({ combo }) => {
  const c = Number(combo) ? Number(combo) : 1000;
  return (
    <div className="w-full">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Percent</th>
            <th>Score ({c}combo)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>JUSTICE CRITICAL</td>
            <td>101%(-1%)</td>
            <td>{(1010000 / c).toFixed(2)} (0)</td>
          </tr>
          <tr>
            <td>JUSTICE</td>
            <td>100%(-1%)</td>
            <td>
              {(1000000 / c).toFixed(2)} (-{(10000 / c).toFixed(2)})
            </td>
          </tr>
          <tr>
            <td>ATTACK</td>
            <td>50%(-51%)</td>
            <td>
              {(500000 / c).toFixed(2)} (-{(510000 / c).toFixed(2)})
            </td>
          </tr>
          <tr>
            <td>MISS</td>
            <td>0%(-101%)</td>
            <td>0 (-{(1010000 / c).toFixed(2)})</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
