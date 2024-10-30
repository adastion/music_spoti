export function CardArtist({ name, external_urls, images, genres }) {
  const cardArtistElement = document.createElement("li")
  cardArtistElement.classList.add("card__artist")
  cardArtistElement.style = "width: auto; background: #708f9a; color: white; text-align: center; padding: 25px 15px; border-radius: 20px; display: grid; justify-items: center"

  const nameArtistElement = document.createElement("h4")
  nameArtistElement.textContent = name

  const linkOnArtistElement = document.createElement("a")
  linkOnArtistElement.href = external_urls.spotify
  linkOnArtistElement.target = "_parent"

  const previewImageElement = document.createElement("img")
  previewImageElement.style = "width: 150px; height: 150px; object-fit: cover; border-radius: 20px;"
  previewImageElement.src = images[1].url

  const genreElement = document.createElement("p")
  genreElement.textContent = genres

  linkOnArtistElement.append(previewImageElement)
  cardArtistElement.append(linkOnArtistElement, nameArtistElement, genreElement)
  return cardArtistElement
}