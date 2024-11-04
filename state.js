import { getAlbums } from "./src/api/getAlbums.js"
import { getToken } from "./src/api/getToken.js"
import { getTracks } from "./src/api/getTracks.js"

export const data = {
  currentContent: "home",
  albums: null,
  tracks: null,
  pathPage: null,
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
export function setDefaulePage() {
  data.currentContent = "home"
  notify()
}

export async function setArtistId(artistId) {
  data.currentContent = "albums"
  await getAlbums(artistId)
  notify()
}

export function setDataAlbums(listData) {
  data.albums = listData
  notify()
}

///
export async function setAlbumId(albumId) {
  data.currentContent = "tracks"
  await getTracks(albumId)
  notify()
}

export function setDataTracks(listData) {
  data.tracks = listData
  notify()
}

export async function setPathPage(authData) {
  await getToken(authData)
  data.currentContent = "authorization"
  notify()
}