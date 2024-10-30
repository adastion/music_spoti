import { getToken } from "./src/api/getToken.js"
import { getArtists } from "./src/api/getArtists.js"
import { Artists } from "./src/ui/components/Artists.js"
import { getAlbums } from "./src/api/getAlbums.js"

export async function App() {
  getToken()
  const arrayArtists = await getArtists()
  Artists(arrayArtists)
  
}