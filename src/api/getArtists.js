export async function getArtists() {
  const resArtists = await fetch("https://api.spotify.com/v1/artists?ids=2NPduAUeLVsfIauhRwuft1,1GhPHrq36VKCY3ucVaZCfo,2CIMQHirSU0MQqyYHq0eOx", {
    method: "GET",
    headers: {
      'Authorization': `${localStorage.getItem("token_type")} ${localStorage.getItem("access_t")}`
    }
  })

  try {
    const dataArtists = await resArtists.json()
    // console.log(Array.from(dataArtists.artists))
    return Array.from(dataArtists.artists)
  } catch (error) {
    console.log(error, "Проблемки")
  }
}