import questionContent from './content'
import resultView from '../result'
import { haveSameContents, removeElements, delay } from '../utilities'

const onHandleNextBtn = async (e, state) => {
  const currentQuestion = state.questions[state.currentQuestionIndex]

  const answerExist = state.answers[currentQuestion.q_id]

  const buttonElement = e.target

  if (answerExist === undefined) {
    alert('You did not answer this question')
    return
  }
  buttonElement.disabled = true

  let isCorrectAnswer
  if (currentQuestion.question_type === 'multiplechoice-multiple') {
    isCorrectAnswer = haveSameContents(currentQuestion.correct_answer, answerExist)
    currentQuestion.correct_answer.forEach((answer) => {
      const correctAnswerElement = document.querySelector(`div[data-for='${answer}']`)
      correctAnswerElement.classList.add(isCorrectAnswer ? 'question--answers__correct' : 'question--answers__wrong')
    })
  } else {
    isCorrectAnswer = currentQuestion.correct_answer === answerExist
    const correctAnswerElement = document.querySelector(`div[data-for='${currentQuestion.correct_answer}']`)
    correctAnswerElement.classList.add(isCorrectAnswer ? 'question--answers__correct' : 'question--answers__wrong')
  }

  state.points[currentQuestion.q_id] = isCorrectAnswer ? currentQuestion.points : 0

  state.currentQuestionIndex++

  await delay(3 * 1000)

  if (state.currentQuestionIndex !== state.questions.length) {
    buttonElement.disabled = false
    questionContent(state)
  } else {
    resultView(state)
  }
}

const questionView = (state) => {
  const container = document.getElementById('container')
  container.className = 'container container-start'
  removeElements(container)

  const imgContainer = document.createElement('div')
  imgContainer.className = 'img--container'
  imgContainer.id = 'question-image-container'
  const img = document.createElement('img')
  img.className = 'img__contain'
  img.id = 'question-image'
  imgContainer.appendChild(img)

  const questionText = document.createElement('p')
  questionText.className = 'question--context'
  questionText.id = 'question-context'

  const answersContainer = document.createElement('div')
  answersContainer.id = 'answers-container'
  answersContainer.className = 'question--answers'

  const btnContainer = document.createElement('div')
  btnContainer.className = 'button--container'
  const nextBtn = document.createElement('button')
  nextBtn.id = 'next-button'
  nextBtn.textContent = 'Next'
  nextBtn.className = 'button button--disabled'
  nextBtn.addEventListener('click', (e) => onHandleNextBtn(e, state))
  btnContainer.appendChild(nextBtn)

  container.appendChild(imgContainer)
  container.appendChild(questionText)
  container.appendChild(answersContainer)
  container.appendChild(btnContainer)
}

export default questionView
