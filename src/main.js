import styles from '@/styles/main.scss'

let options = (new URL(document.location)).searchParams
let dpi = parseInt(options.get('dpi')) || window.devicePixelRatio
let antialias = options.get('antialias') === 'false' ? false : true

import init from '@/modules/init'
let { draw, start, stop } = init({ dpi, antialias })

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

	let controls = process.env.NODE_ENV === 'development'
	let gui = document.getElementById('gui')

	if (controls) gui.classList.add('visible')
	
	document.addEventListener('keyup', ({ keyCode }) => {
		if (keyCode !== 72) return
		gui.classList.toggle('visible')
	})
	console.log('press h to show controls')
}

document.body.classList.add('loaded')
