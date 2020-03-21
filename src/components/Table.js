import React from "react";

import DEFAULT_DATA from "../store/constants";

const Table = ({ store, displayLang }) => {
  const filteredAnsweres = store.filter(a => a.answerId);
  const rows = filteredAnsweres.map((entry, i) => {
    const questionData = DEFAULT_DATA.find(q => q.id === entry.questionId);
    return (
      <tr key={entry.id}>
        <td>{questionData.translations[displayLang]}</td>
        <td>{questionData.answers.find(a => a.id === entry.answerId).translations[displayLang]}</td>
        <td>{entry.language}</td>
      </tr>
    )
  });

  return (
    <table>
      <caption>

      </caption>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
};

export default Table;
