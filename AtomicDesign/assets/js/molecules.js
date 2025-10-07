import { Div, Input, Label } from "./atoms.js"

export const formGroup = (title, name, placeholder, required, type) => {
    const elm = Div()
    const label = Label(title, name)
    const input = Input(name, placeholder, required)
    elm.append(label, input)
    return elm
}