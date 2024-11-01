import { data } from "../../../../state.js"
import { BackHome } from "../../buttons/BackHome.js"

export function Albums() {
  const albumsData = data.albums.items
  
  const containerElement = document.createElement("div")
  containerElement.classList.add("card-albums")
  const buttonEelement = BackHome()
  console.log("btn", buttonEelement)

  const albumsElement = document.createElement("ol")
  albumsElement.classList.add("card-albums__list")
  
  albumsData.map(album => {
    const cardAlbumElement = document.createElement("li")
    cardAlbumElement.classList.add("card-albums__item")
    const nameAlbumElement = document.createElement("h2")
    const linkElement = document.createElement("a")
    linkElement.href = "#"
    linkElement.id = album.id
    nameAlbumElement.textContent = album.name

    const coverElement = document.createElement("img")
    coverElement.src = album.images[1].url

    linkElement.append(coverElement)
    cardAlbumElement.append(linkElement, nameAlbumElement)
    albumsElement.append(cardAlbumElement)
  })

  containerElement.append(buttonEelement, albumsElement)
  return containerElement
}