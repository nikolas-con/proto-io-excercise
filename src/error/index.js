const handleReload = () => {
  location.reload()
}

const errorView = () => {
  const app = document.getElementById('app')

  const container = document.createElement('div')
  container.id = 'container'
  container.className = 'container container--center'

  const title = document.createElement('h2')
  title.className = 'title'
  title.textContent = 'Unfortunately Something Went Wrong'

  const description = document.createElement('p')
  description.className = 'description description--center'
  description.textContent = 'Please reload the page!'

  const reloadButton = document.createElement('button')
  reloadButton.className = 'button'
  reloadButton.textContent = 'Reload'

  reloadButton.addEventListener('click', handleReload)

  container.appendChild(title)
  container.appendChild(description)
  container.appendChild(reloadButton)

  app.appendChild(container)
}

export default errorView
