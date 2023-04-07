const burgerBtn = document.getElementById('burgerBtn')
const hideBurger = document.getElementById('hideBurger')
const menuBurger = document.getElementById('menuBurger')
const sliderRightBtn = document.getElementById('sliderRightBtn')
const sliderLeftBtn = document.getElementById('sliderLeftBtn')
const slider = document.getElementById('slider')
const sliderItems = document.querySelectorAll('.slider_item')
const btnCustomize = document.querySelectorAll('.item__custom_link')
const customDescription = document.getElementById('customDescription')
const authSection = document.getElementById('authSection')
const nav = document.getElementById('nav')
const toUp = document.getElementById('toUp')


let sliderCount = 0
let sliderScore = 0
let masiv = Array.from(sliderItems)
sliderScore = masiv.length * 160

const customizeTexts = [
    `Every Brella plan comes with a benefit for Moderate, Severe, and Catastrophic conditions. Employees can select the payout amounts that fit their needs and their budget.
    <br><br>
    Employers can fund part or all of the premiums—or offer Brella as a voluntary benefit. The choice is up to you.`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ducimus placeat hic, inventore architecto nisi facilis deleniti quaerat cumque vero! Atque animi expedita aliquam officiis
    <br><br>
    repudiandae doloremque cupiditate molestias. Maiores libero aspernatur eaque voluptates a esse culpa fugiat atque, possimus, iste enim!`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet odio in diam volutpat lacinia. Etiam varius vehicula mi, 
    <br><br>
    In facilisis, urna nec accumsan pellentesque, tortor lorem convallis felis, sit amet volutpat sapien nisi a elit. `,
    `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    <br><br>
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
    `,
    `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti magnam magni accusamus esse quo hic atque voluptas at a. Voluptatem facilis culpa in! Officiis consequatur molestias nobis beatae, est praesentium asperiores consectetur? 
    <br><br>
    Nesciunt ab voluptatum a sapiente aperiam, maiores soluta dolore expedita nisi sint reprehenderit rerum, veritatis laudantium nam natus.`,
    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed aliquid quo recusandae inventore modi et corrupti quasi sint? 
    <br><br>
    Accusantium voluptatibus ea corrupti cumque expedita magnam fuga excepturi odio optio, deserunt illum autem laboriosam atque, ut earum vitae quis ipsa ipsum. Consectetur sapiente dolore quas ratione officia eos, optio harum blanditiis?`
]

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('hide')
    menuBurger.classList.toggle('active')
})

hideBurger.addEventListener('click', () => menuBurger.classList.toggle('active'))

function sliderMoveRight(count) {
    sliderCount += count
    if (sliderCount < sliderScore) {
        slider.style.transform = `translateX(-${sliderCount}px)`
    } else {
        sliderCount = 0
        slider.style.transform = `translateX(${sliderCount}px)`
    }
}

function sliderMoveLeft(count) {
    sliderCount -= count
    if (sliderCount < sliderScore) {
        slider.style.transform = `translateX(-${sliderCount}px)`
    } else {
        sliderCount = 0
        slider.style.transform = `translateX(${sliderCount}px)`
    }
}

function removeClassActiveLink() {
    btnCustomize.forEach(el => {
        el.classList.remove('link_active')
    })
}

sliderRightBtn.addEventListener('click', () => {
    if(window.innerWidth > 500) {
        sliderMoveRight(200)
    } else {
        sliderMoveRight(150)
    }
})
sliderLeftBtn.addEventListener('click', () => {
    if(window.innerWidth > 500) {
        sliderMoveLeft(200)
    } else {
        sliderMoveLeft(150)
    }
})


btnCustomize.forEach(e => {
    e.addEventListener('click', event => {
        removeClassActiveLink()
        event.target.classList.add('link_active')
        console.log(event.target.dataset.id)
        customDescription.innerHTML = customizeTexts[Number(event.target.dataset.id)-1]
    })
})

const authButtonAuth = () => {
    let error = false
    const inputLogin = document.getElementById('inputLogin').value
    const inputReg = document.getElementById('inputReg').value
    let alert = createAlert('', '')
    if(inputLogin.length <= 5) {
        alert = createAlert('Login is too short', 'error').open()
        error = true
    }
    if (inputLogin.length > 16) {
        error = true
        alert = createAlert('Login is too long', 'error').open()
    }
    if (inputReg.length < 8) {
        error = true
        alert = createAlert('Password is too short', 'error').open()
    }
    if(inputReg.length > 32) {
        error = true
        alert = createAlert('Password is too long', 'error').open()
    }
    if(!error) {
        createAlert('You have successfully logged into your account', 'text').open()
        modalAuth.close()
    }
}
const authButtonClose = () => {
    modalAuth.close()
}

const regButtonRegister = () => {
    let error = false
    const inputRegLogin = document.getElementById('inputRegLogin').value
    const inputPass = document.getElementById('inputPass').value
    const inputRepeatPass = document.getElementById('inputRepeatPass').value
    let alert = createAlert('', '')
    
    if(inputRepeatPass != inputPass) {
        error = true
        alert = createAlert('Password mismatch', 'error').open()
    }
    if(inputRegLogin.length <= 5) {
        alert = createAlert('', 'error').open()
        error = true
    }
    if (inputRegLogin.length > 16) {
        error = true
        alert = createAlert('Login is too short', 'error').open()
    }
    if (inputPass.length < 8) {
        error = true
        alert = createAlert('Password is too short', 'error').open()
    }
    if(inputPass.length > 32) {
        error = true
        alert = createAlert('Password is too long', 'error').open()
    }
    if(!error) {
        createAlert('You have successfully registered on our website', 'text').open()
        modalReg.close()
    }
}
const regButtonClose = () => {
    modalReg.close()
}

const modalAuth = createModal({
    title: 'Authorization',
    content: `
        <input type="text" id="inputLogin" placeholder="Enter Login"/>
        <input type="password" id="inputReg" placeholder="Enter Password"/>
    `,
    buttons: [
        {text: 'Login', type: 'btn__blue', func: 'authButtonAuth()'},
        {text: 'Close', type: 'btn__red', func: 'authButtonClose()'}
    ]
})

const modalReg = createModal({
    title: 'Registration',
    content: `
        <input type="text" id="inputRegLogin" placeholder="Enter Login"/>
        <input type="password" id="inputPass" placeholder="Enter Password"/>
        <input type="password" id="inputRepeatPass" placeholder="Repeat Pssword"/>
    `,
    buttons: [
        {text: 'Register', type: 'btn__blue', func: 'regButtonRegister()'},
        {text: 'Close', type: 'btn__red', func: 'regButtonClose()'}
    ]
})

authSection.addEventListener('change', e => {
    if(e.target.value === 'login') {
        modalAuth.open()
    } else if (e.target.value === 'register') {
        modalReg.open()
    }
})

window.addEventListener('scroll', e => {
    if(window.scrollY >= 811) {
        nav.classList.add('fixed')

    } else {
        nav.classList.remove('fixed')
    }
    if(window.scrollY >= 500) {
        toUp.classList.add('visible')

    } else {
        toUp.classList.remove('visible')
    }
})
