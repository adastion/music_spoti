import { Field } from "./Field/Field.js"

export function Auth() {
  const containerElement = document.createElement("div")
  containerElement.classList.add("authorization")

  const titleElement = document.createElement("h2")
  titleElement.classList.add("authorization__title")
  titleElement.textContent = "Authorization"

  const formElement = document.createElement("form")
  formElement.classList.add("authorization__form")

  const loginElement = Field("Login", "userName", "text")
  const passwordElement = Field("Password", "userPassword", "password")

  const btnElement = document.createElement("button")
  btnElement.classList.add("authorization__btn")
  btnElement.textContent = "Sign in"

  formElement.append(
    loginElement,
    passwordElement,
    btnElement
  )

  containerElement.append(titleElement, formElement)
  return containerElement
} 