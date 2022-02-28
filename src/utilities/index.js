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
export { fetchData }
