const arrImages = [
    {
        file: 'agaeta01.jpeg',
        title: 'Agaeta By'
    },
    {
        file: 'agaeta02.jpeg',
        title: 'Agaeta Natural Pools'
    },
    {
        file: 'confital01.jpeg',
        title: 'Confital Beach'
    },
    {
        file: 'dessert01.jpeg',
        title: 'Playa Del Ingles'
    }
]

const displayGallery = () => {
    for(let item of arrImages) {
        const div = document.createElement('div')
        const figure = document.createElement('figure')
        const img = document.createElement('img')
        const caption = document.createElement('caption')
        caption.innerText = item.title
        img.src = `images/gallery/small/${item.file}`
        img.alt = `${item.title}`
        
        figure.append(img)
        figure.append(caption)
        div.append(figure)

        document.getElementById('gallery').append(div)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const imgElements = Array.from(document.querySelectorAll('img'))    
    
    const modalDiv = document.createElement('div')
    modalDiv.classList.add('lightbox')
    document.body.append(modalDiv)

    const openModal = index => {
        const imgClone = imgElements[index].cloneNode()
        modalDiv.innerHTML = ''
        modalDiv.append(imgClone)
        modalDiv.classList.add('active')
        
    }

    const closeModal = () => {
        modalDiv.classList.remove('active')
    }

    imgElements.forEach((img, index) => {
        img.addEventListener('click', () => openModal(index))
    })

    modalDiv.addEventListener('click', () => closeModal())
    
})

displayGallery()