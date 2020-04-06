import hash from "object-hash";

import ANSWERS_PL from "../../data/PL.csv";
import ANSWERS_DE from "../../data/DE.csv";
import ANSWERS_EN from "../../data/EN.csv";
import ANSWERS_ES from "../../data/ES.csv";
import ANSWERS_FR from "../../data/FR.csv";
import ANSWERS_IT from "../../data/IT.csv";
import ANSWERS_PT from "../../data/PT.csv";
import ANSWERS_RU from "../../data/RU.csv";

import { QUESTIONS } from "../constants/questions";

const getAllAnswers = (arr = [], lang = "") => {
  const answers = [];

  arr.forEach(answerSet => {
    const questionsWithIds = Object.keys(answerSet).slice(1).map(question => {
      return {
        text: question,
        id: (QUESTIONS.find(q => q.translations[lang] === question)).id
      }
    });
    const userId = hash(answerSet);

    questionsWithIds.forEach(question => {
      const oneAnswer = String(answerSet[question.text]);

      if (oneAnswer) {
        const answer = oneAnswer.split(';');

        answer.forEach(atomicAnswer => {
          const obj = {
            userId: userId,
            questionId: question.id,
            language: lang,
            text: atomicAnswer
          };
          const defaultAnswer = QUESTIONS.find(q => q.id === question.id).answers.find(a => a.translations[lang] === atomicAnswer);

          if (defaultAnswer) {
            obj.answerId = defaultAnswer.id;
          }

          obj.id = hash(obj);

          answers.push(obj);
        })
      }
    });
  });

  return answers;
};

const answers = [
  ...getAllAnswers(ANSWERS_DE, "de"),
  ...getAllAnswers(ANSWERS_EN, "en"),
  ...getAllAnswers(ANSWERS_ES, "es"),
  ...getAllAnswers(ANSWERS_FR, "fr"),
  ...getAllAnswers(ANSWERS_IT, "it"),
  ...getAllAnswers(ANSWERS_PL, "pl"),
  ...getAllAnswers(ANSWERS_PT, "pt"),
  ...getAllAnswers(ANSWERS_RU, "ru")
];

console.log(answers.filter(a => !a.answerId));

export { answers };
