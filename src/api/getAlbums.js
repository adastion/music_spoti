import { setDataAlbums } from "../../state.js"

export async function getAlbums(artistId) {
  const resAlbum = await fetch(`https://api.spotify.com/v1/artists/${artistId}/albums`, {
    method: "GET",
    headers: {
      'Authorization': `${localStorage.getItem("token_type")} ${localStorage.getItem("access_t")}`
    }
  })

  try {
    const dataAlbum = await resAlbum.json()
    console.log("from getAlbums", dataAlbum)
    setDataAlbums(dataAlbum)

  } catch (error) {
    console.log(error, "Проблемки")
  }
}