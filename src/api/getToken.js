import { authData } from "../utils/authData.js"

export async function getToken(data) {
  let client_id = data.client_id
  let client_secret = data.client_secret

  if (data.client_id !== "" || data.client_secret !== "") {
    client_id = data.client_id
    client_secret = data.client_secret
  } else {
    client_id = authData.client_id
    client_secret = authData.client_secret
  }

  const resAuth = await fetch('https://accounts.spotify.com/api/token', {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`
  })

  try {
    const data = await resAuth.json()
    localStorage.setItem("access_t", data.access_token)
    localStorage.setItem("token_type", data.token_type)
  } catch (error) {
    console.log(error, "Проблемы с доступом")
  }

}
