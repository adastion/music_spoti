import { getArtists } from "./src/api/getArtists.js"
import { getToken } from "./src/api/getToken.js"
import { Albums } from "./src/ui/components/albums/Albums.js"
import { Artists } from "./src/ui/components/artists/Artists.js"
import { data, subscribe } from "./state.js"

const rootElement = document.getElementById("root")
rootElement.style = "display: flex; flex-direction: column; align-items: center;"

subscribe(() => {
  document.getElementById("root").innerHTML = ""

  switch (data.currentContent) {
    case "home":
      App()
      break;
    case "albums":
      rootElement.append(Albums())
      break;
    default: App()
  }
})

export async function App() {
  getToken()
  const arrayArtists = await getArtists()
  const artistsElement = Artists(arrayArtists)


  rootElement.append(artistsElement)
}