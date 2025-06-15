import React from "react";
import ResultsDetail from "./ResultsDetail";
import { results } from "../../../constants/results";
import './styles/Results.css'

const Results = ({ clubName }) => {
  const filtered = results.filter(item => item.club === clubName);

  return (
    <div className="results-grid">
      {filtered.map((item) => (
        <ResultsDetail
          key={item.id}
          image={item.image}
          title={item.title}
          tags={item.tags}
        />
      ))}
    </div>
  );
};

export default Results;
