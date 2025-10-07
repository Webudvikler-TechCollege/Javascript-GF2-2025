import { Div } from "./atoms.js";
import { formGroup } from "./molecules.js";

const ROOT = document.getElementById('container')

const elm = Div()

const firstname = formGroup('Fornavn', 'firstname', 'Indtast dit fornavn')
const lastname = formGroup('Efternavn', 'lastname', 'Indtast dit efternavn')

elm.append(firstname, lastname)

ROOT.append(elm)