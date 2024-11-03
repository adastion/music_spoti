import { data, setAlbumId } from "../../../../state.js"
import { BackHome } from "../buttons/BackHome.js"

export function Albums() {
  const albumsData = data.albums.items

  const containerElement = document.createElement("div")
  containerElement.classList.add("card-albums")
  const buttonEelement = BackHome()

  const albumsElement = document.createElement("ol")
  albumsElement.classList.add("card-albums__list")

  albumsData.map(album => {
    const cardAlbumElement = document.createElement("li")
    cardAlbumElement.classList.add("card-albums__item")
    const nameAlbumElement = document.createElement("h2")
    nameAlbumElement.textContent = album.name

    const linkElement = document.createElement("a")
    linkElement.id = album.id
    linkElement.addEventListener("click", (e) => {
      e.preventDefault()
      setAlbumId(e.currentTarget.id)
    })

    const coverElement = document.createElement("img")
    coverElement.src = album.images[1].url

    linkElement.append(coverElement)
    cardAlbumElement.append(linkElement, nameAlbumElement)
    albumsElement.append(cardAlbumElement)
  })

  containerElement.append(buttonEelement, albumsElement)
  return containerElement
}
