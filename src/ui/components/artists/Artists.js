import { CardArtist } from "./card_artist/CardArtist.js"

export function Artists(data) {
  const artists = data

  const artistsListElement = document.createElement("ul")
  artistsListElement.classList.add("artists__list")

  artists.map(artist => {
    artistsListElement.append(CardArtist(artist))
  })

  return artistsListElement
}