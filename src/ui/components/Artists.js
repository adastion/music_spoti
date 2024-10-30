export function Artists(data) {
  const artists = data
  const rootElement = document.getElementById("root")
  rootElement.style = "display: flex; flex-direction: column; align-items: center;"

  const artistsListElement = document.createElement("ul")
  artistsListElement.style = "margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; "

  artists.map(artist => {
    const cardArtistElement = document.createElement("li")
    cardArtistElement.classList.add("card__artist")
    cardArtistElement.style = "width: auto; background: #708f9a; color: white; text-align: center; padding: 25px 15px; border-radius: 20px; display: grid; justify-items: center"

    const nameArtistElement = document.createElement("h4")
    nameArtistElement.textContent = artist.name

    const linkOnArtistElement = document.createElement("a")
    linkOnArtistElement.href = artist.external_urls.spotify
    linkOnArtistElement.target = "_parent"

    const previewImageElement = document.createElement("img")
    previewImageElement.style = "width: 150px; height: 150px; object-fit: cover; border-radius: 20px;"
    previewImageElement.src = artist.images[1].url

    const genreElement = document.createElement("p")
    genreElement.textContent = artist.genres

    linkOnArtistElement.append(previewImageElement)
    cardArtistElement.append(linkOnArtistElement, nameArtistElement, genreElement)
    artistsListElement.append(cardArtistElement)
  })

  rootElement.append(artistsListElement)
}