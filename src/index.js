import './scss/index.scss'

// eslint-disable-next-line require-jsdoc
function setIcons() {
    const elems = []
    for (const elem of document.getElementsByTagName('*')) {
        if (elem.hasAttribute('data-icon')) {
            elems.push(elem);
        }
    }
    // eslint-disable-next-line require-jsdoc
    function set(el) {
        const contentEl = document.createElement('i')
        const type = el.dataset.icon
        contentEl.classList.add('material-icons')
        contentEl.textContent = type;
        el.appendChild(contentEl)
    }
    for (const el of elems) {
        set(el)
    }
}

console.log('Working!')
setIcons()
