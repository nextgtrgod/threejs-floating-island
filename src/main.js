// import 'babel-polyfill';

import main from './styles/main.styl'
import preloader from './styles/preloader.css'

import init from './modules/init'


window.addEventListener('load', () => {

    init()


    let showControls = process.env.NODE_ENV === 'development'

    let toggleControls = () => {
        if (showControls) document.body.classList.add('show-controls')
        else document.body.classList.remove('show-controls')
    }

    toggleControls()

    document.addEventListener('keyup', ({ keyCode }) => {
        if (keyCode !== 72) return

        showControls = !showControls

        toggleControls()
    })

    console.log('press h to show controls')
})
