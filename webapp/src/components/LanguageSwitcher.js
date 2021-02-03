import React from 'react';
import PropTypes from 'prop-types';

import {
  LANGUAGE_KEYS,
  LANGUAGE_LABELS
} from '../constants/languages';

const LanguageSwitcher = ({
  language,
  setLanguage
}) => {
  const onSelectLanguage = e => {
    const nextLanguage = e.target.value;

    if (!LANGUAGE_KEYS.includes(nextLanguage)) {
      throw new Error(`Language "${nextLanguage}" was not found.`);
    }

    setLanguage(nextLanguage);
  };
  const options = LANGUAGE_KEYS.map(lang => (
    <option value={lang} key={lang}>
      {LANGUAGE_LABELS[lang]}
    </option>
  ));

  return (
    <select onChange={onSelectLanguage} value={language}>
      {options}
    </select>
  );
};

LanguageSwitcher.propTypes = {
  language: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired
}

export default LanguageSwitcher;