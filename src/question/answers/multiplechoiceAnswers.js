const handleMultiplechoiceSingle = (e, id, answers) => {
  answers[id] = +e.target.value
}
const handleMultiplechoiceMultiple = (e, id, answers) => {
  if (!answers[id]) {
    answers[id] = [+e.target.value]
  } else {
    if (e.target.checked) {
      answers[id].push(+e.target.value)
    } else {
      const removeIndex = answers[id].findIndex((answer) => answer === +e.target.value)
      answers[id].splice(removeIndex, 1)
    }
  }
}

const handleMultiplechoiceAnswers = (currentQuestionId, questionType, possibleAnswers, answers) => {
  const possibleAnswersElement = possibleAnswers.map((possibleAnswer) => {
    const answerContainer = document.createElement('div')
    answerContainer.className = 'question--answer'
    answerContainer.setAttribute('data-for', possibleAnswer.a_id)
    const label = document.createElement('label')
    label.className = 'question--lable'
    label.textContent = possibleAnswer.caption
    label.for = possibleAnswer.a_id

    const input = document.createElement('input')
    input.type = questionType === 'multiplechoice-single' ? 'radio' : 'checkbox'
    input.id = possibleAnswer.a_id
    input.value = possibleAnswer.a_id
    input.name = 'answer'
    input.addEventListener('change', (e) =>
      questionType === 'multiplechoice-single' ? handleMultiplechoiceSingle(e, currentQuestionId, answers) : handleMultiplechoiceMultiple(e, currentQuestionId, answers)
    )

    answerContainer.appendChild(input)
    answerContainer.appendChild(label)
    return answerContainer
  })

  return possibleAnswersElement
}

export { handleMultiplechoiceAnswers }
