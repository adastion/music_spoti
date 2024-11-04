export function getFromForm(formId) {
  const formElement = document.getElementById(formId)
  const elements = Array.from(formElement)
  let data = {}
  elements.forEach(element => {
    if (element.nodeName === "INPUT") {
      const { name, value } = element
      data = { ...data, [name]: value }
    }
  })

  console.log(data)
  return data
}