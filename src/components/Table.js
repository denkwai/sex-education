import React from "react";

const Table = ({ language, answers }) => {
  const titles = Object.keys(answers[0]);
  const rows = answers.map(answer => {
    const key = answer["Timestamp"];
    const cells = Object.keys(answer).map(question => {
      return <td key={question}>{answer[question]}</td>;
    });

    return <tr key={key}>{cells}</tr>;
  });

  console.log(answers[0]);
  return (
    <table>
      <caption>{language}</caption>
      <thead>
        <tr>
          {titles.map(title => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Table;
