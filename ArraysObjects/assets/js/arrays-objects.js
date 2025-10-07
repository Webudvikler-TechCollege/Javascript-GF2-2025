const ROOT = document.getElementById('container')

const arrCars = [
    { brand: 'Volvo', model: 'Amazon' },
    { brand: 'Kia', model: 'Picanto' },
    { brand: 'Mercedes', model: 'CL-500' },
    { brand: 'Renault', model: 'Megane' }
]

for(let item of arrCars) {
    const { brand } = item
    const div = document.createElement('div')
    div.className = 'car'
    div.innerText = brand
    ROOT.append(div)    
}
