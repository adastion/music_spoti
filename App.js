import { getToken } from "./src/api/getToken.js"
import { getArtists } from "./src/api/getArtists.js"
import { Artists } from "./src/ui/components/artists/Artists.js"
import { getAlbums } from "./src/api/getAlbums.js"

const rootElement = document.getElementById("root")
rootElement.style = "display: flex; flex-direction: column; align-items: center;"

export async function App() {
  getToken()
  const arrayArtists = await getArtists()
  const contentWithArtistsElement = Artists(arrayArtists)

  arrayArtists.map(artist => {
    getAlbums(artist.id)
  })

  rootElement.append(contentWithArtistsElement)
}