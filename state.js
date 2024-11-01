import { getAlbums } from "./src/api/getAlbums.js"

export const data = {
  currentContent: "home",
  albums: null
}

const subscibersList = []

function notify() {
  subscibersList.forEach(subscriber => {
    subscriber()
  })
}

export function subscribe(subscriber) {
  subscibersList.push(subscriber)
}

////
export async function setArtistId(artistsId) {
  data.currentContent = "albums"
  await getAlbums(artistsId)
  notify()
}

export function setDataAlbums(listData) {
  data.albums = listData
  notify()
}

export function setDefaulePage() {
  data.currentContent = "home"
  notify()
}