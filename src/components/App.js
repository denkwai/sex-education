import React from "react";

import Table from "./Table";

const App = ({ store }) => {
  const answers = store;

  return (
    <div>
      <Table language="en" answers={answers.en} />
    </div>
  );
};

export default App;
