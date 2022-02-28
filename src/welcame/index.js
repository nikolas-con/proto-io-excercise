import questionView from '../question'

const handleStartedBtn = (state) => {
  questionView(state)
}
const wellcomeView = (state) => {
  const app = document.getElementById('app')

  const container = document.createElement('div')
  container.id = 'container'
  container.className = 'container container--center'

  const splitedDescription = state.description.split('?')

  const title = document.createElement('h1')
  title.className = 'title'
  title.textContent = state.title

  const description = document.createElement('h3')
  description.className = 'description'
  description.textContent = `${splitedDescription[0]}?`

  const subDescription = document.createElement('p')
  subDescription.className = 'description description--center'
  subDescription.textContent = splitedDescription[1]

  const startedButton = document.createElement('button')
  startedButton.className = 'button'
  startedButton.textContent = 'Get Started'

  startedButton.addEventListener('click', () => handleStartedBtn(state))

  container.appendChild(title)
  container.appendChild(description)
  container.appendChild(subDescription)
  container.appendChild(startedButton)

  app.appendChild(container)
}
export default wellcomeView
