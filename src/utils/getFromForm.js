export function getFromForm(formId) {
  const formElement = document.getElementById(formId)
  const elements = Array.from(formElement)
  const data = []
  elements.forEach(element => {
    if (element.nodeName === "INPUT") {
      const { name, value } = element
      data.push({ [name]: value })
    }
  })

  return data
}