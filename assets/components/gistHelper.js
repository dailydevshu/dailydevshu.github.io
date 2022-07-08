import { v4 as uuidv4 } from 'uuid'

document.querySelectorAll('gist').forEach((el) => {
    let url = el.innerHTML

    let scriptElement = document.createElement('script')
    scriptElement.src = `${url}.js`

    let iFrameElement = document.createElement('iframe')
    iFrameElement.setAttribute('width', '100%')
    iFrameElement.id = `gistElement-${uuidv4()}`

    el.parentNode.replaceChild(iFrameElement, el)

    let docElement = iFrameElement.contentWindow.document || iFrameElement.contentDocument.documentElement
    docElement.open()
    docElement.write(scriptElement.outerHTML)
    docElement.close()

    iFrameElement.addEventListener('load', function () {
        const height = iFrameElement.contentDocument.documentElement.scrollHeight
        iFrameElement.setAttribute('height', `${height}px`)
    })
})