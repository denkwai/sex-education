import React, { useState } from "react";

import { LANGUAGE_KEYS } from '../constants/languages';
import LanguageSwitcher from './LanguageSwitcher';
import Charts from './Charts';
/**
 * @TODO: implement filtering by
 *  - country
 *  - age
 *  - sex. orientation
 *  - gender
 *  - place of living
 *  - education
 *  - relationship status
 * 
 * @TODO: implement chart view
 */

const App = ({
  store = []
}) => {
  const [filters, setFilters] = useState([]);
  const [language, setLanguage] = useState(LANGUAGE_KEYS[0]);

  return (<>
    <LanguageSwitcher language={language} setLanguage={setLanguage} />

    <Charts data={store} language={language} />
  </>);
}

export default App;
