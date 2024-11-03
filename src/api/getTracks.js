import { setDataTracks } from "../../state.js"

export async function getTracks(albumId) {
  const resTracks = await fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
    method: "GET",
    headers: {
      'Authorization': `${localStorage.getItem("token_type")} ${localStorage.getItem("access_t")}`
    }
  })

  try {
    const dataAlbum = await resTracks.json()
    setDataTracks(dataAlbum.tracks)
    console.log(dataAlbum.tracks)

  } catch (error) {
    console.log(error, "Проблемки")
  }
}