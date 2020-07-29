import { WebGLRenderer } from 'three'
import { WEBGL } from 'three/examples/jsm/WebGL.js'

let getContext = canvas => {
	if (WEBGL.isWebGL2Available()) return canvas.getContext('webgl2')

	return canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
}

let createRenderer = ({
	canvas,
	W,
	H,
	dpi = window.devicePixelRatio,
	antialias = true,
}) => {

	let renderer = new WebGLRenderer({
		canvas,
		context: getContext(canvas),
		antialias: antialias,
		alpha: true,
		powerPreference: 'high-performance',
	})
	renderer.setSize(W, H)
	renderer.setPixelRatio(dpi)

	renderer.shadowMap.enabled = true
	// renderer.shadowMap.renderReverseSided = true

	return renderer
}

export default createRenderer
