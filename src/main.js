import styles from './styles/main.scss'

let options = (new URL(document.location)).searchParams
let dpr = parseInt(options.get('dpr')) || window.devicePixelRatio
let antialias = options.get('antialias') === 'false' ? false : true

import init from './modules/init'
let { draw, start, stop } = init({ dpr, antialias })

let isIframe = (() => {
	try {
		return window.self !== window.top
	} catch (e) {
		return true
	}
})()

if (isIframe) {
	document.body.classList.add('is-iframe')

	draw()

	let trusted = [
		'http://localhost:8080',
		'https://nextgtrgod.github.io',
	]

	window.addEventListener('message', e => {
		if (!trusted.includes(e.origin)) return

		switch (e.data) {
			case 'start':
				start()
				break;
			case 'stop':
				stop()
				break;
		}
	})
} else {
	start()

	let gui = document.getElementById('gui')
	let controls = process.env.NODE_ENV === 'development'

	if (gui && controls) {
		gui.classList.add('visible')
		console.log('press h to toggle controls')
	}
	
	document.addEventListener('keyup', ({ keyCode }) => {
		if (keyCode !== 72) return
		gui.classList.toggle('visible')
	})
}

document.body.classList.add('loaded')
