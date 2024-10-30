export function Albums(data) {
  const cardElement = document.querySelectorAll(".card__artist")
  const albumListElement = document.createElement("ul")

  data.map(album => {
    cardElement.forEach(card => {
      card.querySelector('a').addEventListener("click", (e) => {
        card.append(albumListElement)
      })
    })
    
    const albumElement = document.createElement("li")
    albumElement.textContent = album.name
    albumListElement.append(albumElement)

  })

}