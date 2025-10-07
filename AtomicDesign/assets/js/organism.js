import { Button, Form } from "./atoms.js";
import { formGroup } from "./molecules.js";

export const newsletterForm = () => {
    const arrFields = [
        { name: 'name', title: 'Navn', placeholder: 'Indtast dit navn'},
        { name: 'email', title: 'Email', placeholder: 'Indtast din email', type: 'email' },
    ]

    const form = Form('nl', 'POST')
    arrFields.forEach(element => {
        const { name, title, placeholder, type } = element
        const elm = formGroup(title, name, placeholder, type)
        form.append(elm)
    });
    const btn = Button('Send')
    form.append(btn)

    form.addEventListener('submit', (e) => {
        e.preventDefault()

    })
    return form
}