export const Div = () => {
    const div = document.createElement('div')
    div.className = 'box'
    return div
}

export const H1 = (title = 'Overskrift') => {
    const elm = document.createElement('h1')
    elm.innerText = title
    return elm
}

export const Input = (name, placeholder, type = 'text') => {
    const elm = document.createElement('input')
    elm.id = name
    elm.type = type
    elm.name = name
    elm.placeholder = placeholder
    return elm
}

export const Label = (title, id) => {
    const elm = document.createElement('label')
    elm.innerText = title
    elm.htmlFor = id
    return elm
}