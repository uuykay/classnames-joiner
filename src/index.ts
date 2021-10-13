export const classnames = (classnamesList: (string | null | undefined)[]) => {
  let classNames = ""
  for (let i = 0; i < classnamesList.length; i++) {
    if (classnamesList[i] === "" || typeof classnamesList[i] !== "string") {
      continue
    }

    const className = classnamesList[i] as string
    if (classNames !== "") {
      // The first className does not need a space before it.
      classNames += " "
    }
    // Check that trim is needed before applying it
    if (className[0] === " " || className[className.length - 1] === " ") {
      classNames += className.trim()
    } else {
      classNames += className
    }
  }
  return classNames
}