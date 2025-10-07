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

export const Form = (id,method = 'GET') => {
    const elm = document.createElement('form')
    elm.id = id
    elm.method = method
    return elm
}

export const Input = (name, placeholder, required = 'false', type = 'text') => {
    const elm = document.createElement('input')
    elm.id = name
    elm.type = type
    elm.name = name
    elm.required = required
    elm.placeholder = placeholder
    return elm
}

export const Label = (title, id) => {
    const elm = document.createElement('label')
    elm.innerText = title
    elm.htmlFor = id
    return elm
}

export const Button = (title, type = 'submit') => {
    const elm = document.createElement('button')
    elm.innerText = title
    elm.type = type
    return elm
}

