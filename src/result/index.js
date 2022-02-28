import { removeElements } from '../utilities'

const resultView = (state) => {
  const container = document.getElementById('container')
  container.className = 'container container--center'
  removeElements(container)

  const score = Object.values(state.points).reduce((previousValue, currentValue) => previousValue + currentValue, 0)
  const result = state.results.find((result) => result.minpoints < score && result.maxpoints > score)

  const imageContainer = document.createElement('div')
  imageContainer.className = 'img--container'
  const image = document.createElement('img')
  image.src = result.img
  image.className = 'img__contain'
  imageContainer.appendChild(image)

  const title = document.createElement('h1')
  title.className = 'title'
  title.textContent = result.title

  const description = document.createElement('p')
  description.className = 'description description--center'
  description.textContent = result.message

  container.appendChild(imageContainer)
  container.appendChild(title)
  container.appendChild(description)
}

export default resultView
