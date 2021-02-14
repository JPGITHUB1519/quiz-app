import { API_URL } from '../config';
import { v4 as uuidv4 } from 'uuid';

class Quiz {
  constructor() {
    this.questions = [];
    this.answers = [];
  }

  generateIdsForQuestions(questions) {
    const questionsWithIds = questions.map((question, index) => {
      question.id = uuidv4();
      return question;
    });

    return questionsWithIds;
  }

  async getQuestions() {
    try {
      const response = await fetch(`${API_URL}?amount=10&category=9&type=multiple`);
      const result = await response.json();
      let questions = result.results;
      questions = this.generateIdsForQuestions(questions);
      this.questions = questions;

      this.answers = this.questions.map((question) => {
        return {
          question: question,
          userAnswer: null
        }
      });

      console.log(this.answers);
    } catch(error) {
      console.log(error);
    }
  }

  updateAnswer(questionId, answerNumber) {
    const filteredAnswer = this.answers.filter(answer => {
      return answer.question.id === questionId;
    });

    console.log(questionId);
    console.log(filteredAnswer);
  }
}

export default Quiz;
