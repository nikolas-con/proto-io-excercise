import { handleMultiplechoiceAnswers, handleTruefalseAnswers } from './answers'
import { removeElements } from '../utilities'

const questionContent = (state) => {
  const currentQuestion = state.questions[state.currentQuestionIndex]

  const imageElement = document.getElementById('question-image')
  imageElement.src = currentQuestion.img

  const questionContextElement = document.getElementById('question-context')
  questionContextElement.textContent = currentQuestion.title

  let possibleAnswersElements
  if (currentQuestion.question_type === 'multiplechoice-single' || currentQuestion.question_type === 'multiplechoice-multiple') {
    possibleAnswersElements = handleMultiplechoiceAnswers(currentQuestion.q_id, currentQuestion.question_type, currentQuestion.possible_answers, state.answers)
  } else if (currentQuestion.question_type === 'truefalse') {
    possibleAnswersElements = handleTruefalseAnswers(currentQuestion.q_id, state.answers)
  }
  const answersContainerElement = document.getElementById('answers-container')

  if (answersContainerElement.childNodes.length > 0) {
    removeElements(answersContainerElement)
  }

  possibleAnswersElements.forEach((possibleAnswer) => {
    answersContainerElement.appendChild(possibleAnswer)
  })
}

export default questionContent
