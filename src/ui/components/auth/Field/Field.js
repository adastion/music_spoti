export function Field(fieldName, fieldId, fieldType) {
  const containerElement = document.createElement("div")

  const labelElement = document.createElement("label")
  labelElement.classList.add("authorization__label")
  labelElement.textContent = fieldName
  labelElement.htmlFor = fieldId

  const fieldElement = document.createElement("input")
  fieldElement.classList.add("authorization__field")
  fieldElement.id = fieldId
  fieldElement.type = fieldType
  fieldElement.name = fieldName.toLowerCase()

  containerElement.append(labelElement, fieldElement)
  return containerElement
} 