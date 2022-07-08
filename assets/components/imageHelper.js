let images = document.querySelectorAll('p img')

images.forEach(function (image) {
    let parent = image.parentElement,
        titleBlock = document.createElement('div'),
        imageTitle = image.getAttribute('title')

    if (imageTitle) {
        titleBlock.innerHTML = `<div class="image__title">${imageTitle}</div>`
        parent.appendChild(titleBlock)
    }
})