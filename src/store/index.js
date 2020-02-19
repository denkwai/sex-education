import ANSWERS_PL from "../../data/PL.csv";
import ANSWERS_DE from "../../data/DE.csv";
import ANSWERS_EN from "../../data/EN.csv";
import ANSWERS_ES from "../../data/ES.csv";
import ANSWERS_FR from "../../data/FR.csv";
import ANSWERS_IT from "../../data/IT.csv";
import ANSWERS_PT from "../../data/PT.csv";
import ANSWERS_RU from "../../data/RU.csv";

const getAllQuestions = (arr = []) => {
  const obj = arr[0];

  if (!obj) {
    return;
  }

  return Object.keys(obj).filter(key => key !== "Timestamp");
};

const getQuestionId = (questions = [], lang = "", str = "") => {
  for (let i = 0; i < questions.length; i++) {
    const item = questions[i];

    if (str === item.translations[lang]) {
      return item.id;
    }
  }
};

const getAllAnswers = (arr = [], lang = "") => {
  const answers = arr.map(answer => {
    const obj = { ...answer };

    console.log(answer);

    return {
      ...obj
    };
  });
};

const questionsDE = getAllQuestions(ANSWERS_DE);
const questionsEN = getAllQuestions(ANSWERS_EN);
const questionsES = getAllQuestions(ANSWERS_ES);
const questionsFR = getAllQuestions(ANSWERS_FR);
const questionsIT = getAllQuestions(ANSWERS_IT);
const questionsPL = getAllQuestions(ANSWERS_PL);
const questionsPT = getAllQuestions(ANSWERS_PT);
const questionsRU = getAllQuestions(ANSWERS_RU);

const questions = questionsEN.map((question, i) => ({
  id: i,
  key: question,
  translations: {
    de: questionsDE[i],
    en: questionsEN[i],
    es: questionsES[i],
    fr: questionsFR[i],
    it: questionsIT[i],
    pl: questionsPL[i],
    pt: questionsPT[i],
    ru: questionsRU[i]
  }
}));

const answersEN = getAllAnswers(ANSWERS_EN, "en");

console.log(questions);

const answers = {
  de: ANSWERS_DE,
  en: ANSWERS_EN,
  es: ANSWERS_ES,
  fr: ANSWERS_FR,
  it: ANSWERS_IT,
  pl: ANSWERS_PL,
  pt: ANSWERS_PT,
  ru: ANSWERS_RU
};

export { answers };
