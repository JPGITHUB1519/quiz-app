// not needing to import because we are using the "useBuiltIn option in .babelrc"
// import "core-js/stable";
// import "regenerator-runtime/runtime";
import { v4 as uuidv4 } from 'uuid';
import hello from './external';
import Quiz from './models/Quiz';

const quiz = new Quiz();
// quiz.getQuestions().then(questions => {
//   console.log(questions);
// });


async function handleQuestions() {
  await quiz.getQuestions();
  quiz.updateAnswer(quiz.questions[0].id, 1);
  // console.log(quiz.questions);
}



// console.log(uuidv4());
// console.log(uuidv4());

handleQuestions();
