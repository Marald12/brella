function createAlert(text, type) {
    let background = ''
    let close = false
    const wrap = document.createElement('div')
    wrap.classList.add('alert')
    if(type === 'text') {
        background = '#a1ccaa'
    } else if (type === 'error') {
        background = '#d9aaa7'
    } else if (type === 'warning') {
        background = '#d9d0a7'
    }
    wrap.insertAdjacentHTML('afterbegin', `
        <div class="alert_window" style="
            background: ${background};
        ">
            <p>${text}</p>
            <span data-close="">&times;</span>
        </div>
    `)
    wrap.addEventListener('click', e => {
        if(e.target.dataset.close === '') {
            close = true
            wrap.classList.remove('open')
            wrap.classList.add('hide')
            setTimeout(() => {
                wrap.classList.remove('hide')
                close = false
                wrap.remove()
            }, 200)
        }
    })
    document.querySelector('.wrapper').append(wrap)
    return {
        open() {
            !close && wrap.classList.add('open')
            setTimeout(() => {
                this.close()
            }, 4000)
        },
        close() {
            close = true
            wrap.classList.remove('open')
            wrap.classList.add('hide')
            setTimeout(() => {
                wrap.classList.remove('hide')
                close = false
                this.destroy()
            }, 200)
        },
        destroy() {
            wrap.remove()
        }
    }
}