import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { QUESTIONS } from '../constants/questions';

const Charts = ({
  data = [],
  language
}) => {
  const [displayItems, setDisplayItems] = useState([]);
  const [newChart, setNewChart] = useState(QUESTIONS[0].id);
  const charts = displayItems.map(item => {
    return (
      <div key={item.id} />
    )
  });
  const onAddNewChartSubmit = e => {
    e && e.preventDefault();

    if (!newChart) {
      throw new Error(`Question to display is not selected`);
    }

    if (displayItems.includes(newChart)) {
      throw new Error(`Question #${newChart} is already displayed`);
    }

    if (!QUESTIONS.find(q => q.id === newChart)) {
      throw new Error(`Question #${newChart} is not in the list`);
    }

    setDisplayItems([...displayItems, newChart]);
  };
  const onSelectNewChart = e => {
    const newChartId = Number(e.target.value);

    if (!newChartId) {
      throw new Error(`New chart is not selected`);
    }

    if (!QUESTIONS.find(q => q.id === newChartId)) {
      throw new Error(`New chart for the question #${newChartId} is impossible`);
    }

    setNewChart(newChartId);
  };
  const questionOptions = QUESTIONS.map(q => (
    <option key={q.key} value={q.id}>
      {q.translations[language]}
    </option>
  ))

  return (
    <div>
      {charts}

      <form onSubmit={onAddNewChartSubmit}>
        <select onChange={onSelectNewChart}>
          {questionOptions}
        </select>

        <button type="submit">+</button>
      </form>
    </div>
  )
};

Charts.propTypes = {
  data: PropTypes.array.isRequired,
  language: PropTypes.string
};

export default Charts;