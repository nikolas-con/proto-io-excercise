const fetchData = async (url) => {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const data = await response.json()

    return { data, ok: response.ok }
  } catch (error) {
    return { ok: false, data: {} }
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
