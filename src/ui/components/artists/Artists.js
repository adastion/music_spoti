import { CardArtist } from "./card_artist/CardArtist.js"

export function Artists(data) {
  const artists = data

  const artistsListElement = document.createElement("ul")
  artistsListElement.style = "margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; "

  artists.map(artist => {
    artistsListElement.append(CardArtist(artist))
  })

  return artistsListElement
}