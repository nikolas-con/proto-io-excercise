const onChange = (e, id, answers) => {
  answers[id] = e.target.value === 'true'
}
const handleTruefalseAnswers = (currentQuestionId, answers) => {
  const possibleAnswers = ['true', 'false']

  const possibleAnswersElement = possibleAnswers.map((possibleAnswer) => {
    const answerContainer = document.createElement('div')
    answerContainer.className = 'question--answer'
    answerContainer.setAttribute('data-for', possibleAnswer)
    const label = document.createElement('label')
    label.className = 'question--lable'
    label.textContent = possibleAnswer === 'true' ? 'Yes' : 'No'
    label.for = possibleAnswer

    const input = document.createElement('input')
    input.type = 'radio'
    input.id = possibleAnswer
    input.value = possibleAnswer
    input.name = 'answer'
    input.addEventListener('change', (e) => onChange(e, currentQuestionId, answers))

    answerContainer.appendChild(input)
    answerContainer.appendChild(label)
    return answerContainer
  })

  return possibleAnswersElement
}

export { handleTruefalseAnswers }
