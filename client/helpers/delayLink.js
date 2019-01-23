export const delay = (e, name, history) => {
    e.preventDefault()
    setTimeout(() => history.push(`${name}`), 500)
} 