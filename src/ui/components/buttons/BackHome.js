import { setDefaulePage } from "../../../../state.js"

export function BackHome() {
  const btnElement = document.createElement("button")
  btnElement.textContent = "Back"
  btnElement.addEventListener("click", setDefaulePage)

  return btnElement
}