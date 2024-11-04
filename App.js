import { getArtists } from "./src/api/getArtists.js"
import { Albums } from "./src/ui/components/albums/Albums.js"
import { Artists } from "./src/ui/components/artists/Artists.js"
import { Auth } from "./src/ui/components/auth/Auth.js"
import { Tracks } from "./src/ui/components/tracks/Tracks.js"
import { data, setDefaulePage, subscribe } from "./state.js"

const rootElement = document.getElementById("root")
rootElement.style = "display: flex; flex-direction: column; align-items: center;"

subscribe(() => {
  document.getElementById("root").innerHTML = ""
  if (localStorage.getItem("access_t")) {
    setDefaulePage()
  }

  switch (data.currentContent) {
    case "home":
      App()
      break;
    case "albums":
      rootElement.append(Albums())
      break;
    case "tracks":
      rootElement.append(Tracks())
      break;
    default: App()
  }
})

export async function App() {
  if (!localStorage.getItem("access_t")) {
    rootElement.append(Auth())
  } else {
    const arrayArtists = await getArtists()
    const artistsElement = Artists(arrayArtists)

    rootElement.append(artistsElement)
  }

}