export const fetchFilms = async () => {
  const response = await fetch('https://ghibliapi.herokuapp.com/films')
  const data = response.json()
  console.log(data)
  return data
}