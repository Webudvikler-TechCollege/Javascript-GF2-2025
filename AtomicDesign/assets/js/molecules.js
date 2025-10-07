import { Div, Input, Label } from "./atoms.js"

export const formGroup = (title, name, placeholder) => {
    const elm = Div()
    const label = Label(title, name)
    const input = Input(name, placeholder)
    elm.append(label, input)
    return elm
}