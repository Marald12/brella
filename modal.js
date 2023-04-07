function createButtons(buttons = []) {
    const wrap = document.createElement('div')
    wrap.classList.add('footer__buttons')
    buttons.forEach(btns => {
        const btn = document.createElement('button')
        btn.textContent = btns.text
        btn.classList.add('footer__button')
        btn.classList.add(btns.type)
        btn.setAttribute('onclick', String(btns.func))
        wrap.appendChild(btn)
    })
    
    return wrap
}
function createModal(options) {
    const wrapper = document.querySelector('.wrapper')
    const modal = document.createElement('div')
    let closing = false
    modal.classList.add('modal')
    const btns = createButtons(options.buttons)
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal__overlay">
            <div class="modal__window">
                <div class="modal__header">
                    <h2 class="modal__header_title">${options.title || 'Окно'}</h2>
                    <span class="modal__header_hide" data-close="">&times;</span>
                </div>
                <div class="modal__content" data-content="">
                    ${options.content || ''}
                </div>
                <div class="modal__footer">
                    ${btns.outerHTML}    
                </div>
            </div>
        </div>
    `)
    wrapper.appendChild(modal)
    modal.addEventListener('click', e => {
        if(e.target.dataset.close === '') {
            closing = true
            modal.classList.remove('open')
            modal.classList.add('hide')
            setTimeout(() => {
                modal.classList.remove('hide')
                closing = false
            }, 200)
        }
    })
    return {
        open() {
            !closing && modal.classList.add('open')
        },
        close() {
            closing = true
            modal.classList.remove('open')
            modal.classList.add('hide')
            setTimeout(() => {
                modal.classList.remove('hide')
                closing = false
            }, 200)
        }
    }
}
