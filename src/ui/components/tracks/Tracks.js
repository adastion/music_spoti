import { BackHome } from '../buttons/BackHome.js';
import { data } from './../../../../state.js';
import { Track } from './track/Track.js';

export function Tracks() {
  const tracks = data.tracks.items

  const buttonElement = BackHome()

  const containerElement = document.createElement("div")
  containerElement.classList.add("tracks")

  const tracksListElement = document.createElement("ul")
  tracksListElement.classList.add("tracks__list")

  tracks.map(track => {
    tracksListElement.append(Track(track))
  })

  containerElement.append(buttonElement, tracksListElement)
  return containerElement
}