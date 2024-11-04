import { setArtistId } from "../../../../../state.js"

export function CardArtist({ name, images, genres, id }) {
  const cardArtistElement = document.createElement("li")
  cardArtistElement.classList.add("card__artist")
  cardArtistElement.style = `position: relative; width: auto; background: url(${images[0].url}); background-repeat: no-repeat; background-position: center; background-size: cover; color: white; text-align: center; padding: 25px 15px; border-radius: 20px; display: grid; justify-items: center`

  const nameArtistElement = document.createElement("h2")
  nameArtistElement.textContent = name

  const linkOnArtistElement = document.createElement("a")
  linkOnArtistElement.id = id
  linkOnArtistElement.target = "_blank"
  linkOnArtistElement.addEventListener("click", (e)=> {
    setArtistId(e.currentTarget.id)
  })


  const previewImageElement = document.createElement("img")
  previewImageElement.style = "width: 150px; height: 150px; object-fit: cover; border-radius: 20px;"
  previewImageElement.src = images[1].url

  const genreElement = document.createElement("p")
  genreElement.textContent = genres

  linkOnArtistElement.append(previewImageElement)
  cardArtistElement.append(linkOnArtistElement, nameArtistElement, genreElement)
  return cardArtistElement
}