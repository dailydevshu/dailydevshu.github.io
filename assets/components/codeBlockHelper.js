import hljs from 'highlight.js'

document.querySelectorAll('code[class*="language-"]').forEach((el) => {
    let parentEl = el.parentElement,
        languageBlock = document.createElement('div')

    languageBlock.innerHTML = `<div class="code__language">${el.className.substring(9)}</div>`
    parentEl.prepend(languageBlock)

    hljs.highlightElement(el)
})