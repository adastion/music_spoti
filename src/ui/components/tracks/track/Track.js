
export function Track({name}) {
  const containerElement = document.createElement("li")
  containerElement.classList.add("tracks__item")
  containerElement.id = "track.id"

  const nameTrackElement = document.createElement("h3")
  nameTrackElement.classList.add("tracks__title")
  nameTrackElement.textContent = name

  const coverElement = document.createElement("img")
  coverElement.classList.add("tracks__image")
  // coverElement.src = track.image[0].url.spotify

  const previewAudioElement = document.createElement("audio")
  previewAudioElement.classList.add("tracks__audio")

  
  containerElement.append(nameTrackElement, coverElement, previewAudioElement)
  return containerElement
}