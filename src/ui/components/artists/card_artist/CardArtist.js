export function CardArtist({ name, external_urls, images, genres }) {
  const cardArtistElement = document.createElement("li")
  cardArtistElement.classList.add("card__artist")
  cardArtistElement.style = `position: relative; width: auto; background: url(${images[0].url}); background-repeat: no-repeat; background-position: center; background-size: cover; color: white; text-align: center; padding: 25px 15px; border-radius: 20px; display: grid; justify-items: center`

  // content: "";
  // position: absolute;
  // inset: 0;
  // z-index: -1;
  // backdrop-filter: brightness(0.5);

  const nameArtistElement = document.createElement("h4")
  nameArtistElement.textContent = name

  const linkOnArtistElement = document.createElement("a")
  linkOnArtistElement.href = external_urls.spotify
  linkOnArtistElement.target = "_blank"

  const previewImageElement = document.createElement("img")
  previewImageElement.style = "width: 150px; height: 150px; object-fit: cover; border-radius: 20px;"
  previewImageElement.src = images[1].url

  const genreElement = document.createElement("p")
  genreElement.textContent = genres

  linkOnArtistElement.append(previewImageElement)
  cardArtistElement.append(linkOnArtistElement, nameArtistElement, genreElement)
  return cardArtistElement
}