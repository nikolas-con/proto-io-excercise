import { fetchData } from './utilities'
import wellcomeView from './welcame'
import errorView from './error'

const initialState = {
  questions: [],
  answers: {},
  results: [],
  points: {},
  currentQuestionIndex: 0,
  title: '',
  description: '',
}

const getData = async (state) => {
  const quizUrl = 'https://proto.io/en/jobs/candidate-exercise/quiz.json'
  const resultsUrl = 'https://proto.io/en/jobs/candidate-exercise/result.json'
  const quizData = await fetchData(quizUrl)
  const resultsData = await fetchData(resultsUrl)

  if (!quizData.ok || !resultsData.ok) return

  state.title = quizData.data.title
  state.description = quizData.data.description
  state.questions = [...quizData.data.questions]
  state.results = [...resultsData.data.results]

  return state
}

window.onload = async () => {
  const state = await getData(initialState)

  if (state) {
    wellcomeView(state)
  } else {
    errorView()
  }
}
