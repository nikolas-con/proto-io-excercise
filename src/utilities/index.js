const fetchData = async (url) => {
  const response = await fetch(url)

  if (!response.ok) {
    alert('Something went wrong')
    return {
      ok: response.ok,
      data: {},
    }
  }

  const data = await response.json()
  return {
    data,
    ok: response.ok,
  }
}

const removeElements = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

const haveSameContents = (arrayA, arrayB) => {
  if (arrayA.length !== arrayB.length) return false
  let isSame
  for (let i = 0; i < arrayB.length; i++) {
    isSame = arrayA.includes(arrayB[i])
    if (!isSame) return false
  }
  return true
}

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export { fetchData, removeElements, haveSameContents, delay }
