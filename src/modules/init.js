import * as dat from 'dat.gui'
import {
	HemisphereLight,
	AmbientLight,
	Object3D,
	Vector3,
	Clock,
	DirectionalLightHelper,
} from 'three'

import clamp from '@/utils/clamp'

import createScene from './createScene'
import createCamera from './createCamera'
import createRenderer from './createRenderer'
import createSun from './createSun'

import BottomIsland from '@/scene/BottomIsland/BottomIsland'
import MiddleIsland from '@/scene/MiddleIsland/MiddleIsland'
import TopIsland from '@/scene/TopIsland/TopIsland'
import Zeppelin from '@/scene/Zeppelin/Zeppelin'

import Water from './Water'
import LampPost from './LampPost'

// temp
import { materials } from './materials'

import { lightParams } from './lightParams'
import { breakpoints } from './daytimeParams'

import Time from './Time'


let init = ({ dpi, antialias }) => {

	let W = window.innerWidth
	let H = window.innerHeight

	window.addEventListener('resize', () => {
		W = window.innerWidth
		H = window.innerHeight

		renderer.setSize(W, H)
		camera.aspect = W / H
		camera.updateProjectionMatrix()

		draw() // safari fix
	}, false)


	const container = document.getElementById('scene')
	const canvas = container.querySelector('canvas')

	// main
	const scene = createScene()
	const camera = createCamera(W, H)
	const renderer = createRenderer({ canvas, W, H, dpi, antialias })


	// lights (default params)
	const hemisphereLight = new HemisphereLight(0xaaaaaa, 0x000000, .9)
	const ambientLight = new AmbientLight(0x404040, .5)
	const sunLight = createSun()


	let setLights = dayTime => {

		hemisphereLight.intensity = lightParams[dayTime].hemisphereLight.intensity

		ambientLight.intensity = lightParams[dayTime].ambientLight.intensity

		sunLight.intensity = lightParams[dayTime].sunLight.intensity
		sunLight.color.setHex(lightParams[dayTime].sunLight.color)
		sunLight.position.set(...lightParams[dayTime].sunLight.position)

		if (dayTime === 'midnight') {
			lampPosts.map(lampPost => lampPost.turnLights(true) )
			materials.line.color.setHex( 0x111111 );
		} else {
			lampPosts.map(lampPost => lampPost.turnLights() )
			materials.line.color.setHex( 0xdcbbb4 )
		}
	}

	// orbit controls
	// const controls = new OrbitControls(camera);
	// controls.enabled = false;

	const bottomIsland = new BottomIsland()
	const middleIsland = new MiddleIsland()
	const topIsland = new TopIsland()
	const zeppelin = new Zeppelin()

	const islands = new Object3D()
	islands.name = 'islands'

	islands.add(
		bottomIsland.mesh,
		middleIsland.mesh,
		topIsland.mesh,
	)


	// river parts
	const river = []

	const riverParams = [
		{
			points: [
				new Vector3(-450, 690, 40),
				new Vector3(-370, 615, 40),
				new Vector3(-195, 600, 40),
				new Vector3(-180, 210, 40),
				new Vector3(-60, 210, 50),
				new Vector3(-20, 210, 100),
				new Vector3(15, 205, 210),
				new Vector3(0, -180, 230),
				new Vector3(0, -180, 570),
			],
			steps: 25,
		},
		{
			points: [
				new Vector3(0, -250, 665),
				new Vector3(0, -380, 665),
			],
			steps: 4,
		},
		{
			points: [
				new Vector3(-450, 90, 80),
				new Vector3(-450, 0, 80),
			],
			steps: 2,
		},
	]

	for (let i = 0; i < riverParams.length; i++) {
		river.push( new Water(riverParams[i].points, riverParams[i].steps) )
	}

	river.map(riverPart => islands.add(riverPart.mesh))


	// lamp posts
	let lampPosts = []

	const lampPostParams = [
		{ x: -215, y: 650, z: -185, ry: 0 },
		{ x: -215, y: 650, z: 185, ry: Math.PI },
		{ x: 180, y: 250, z: -175, ry: -Math.PI / 4 },
		{ x: 170, y: -150, z: 400, ry: -Math.PI / 2 },
	]

	for (let i = 0; i < lampPostParams.length; i++) {
		const lampPost = new LampPost();

		lampPost.mesh.position.set(
			lampPostParams[i].x,
			lampPostParams[i].y,
			lampPostParams[i].z,
		)

		lampPost.mesh.rotation.y += lampPostParams[i].ry

		lampPosts.push( lampPost )
	}

	islands.add(
		...(lampPosts.map( lampPost => lampPost.mesh ))
	)


	// final
	scene.add(
		hemisphereLight,
		ambientLight,
		sunLight,
		// sunLightHelper, // temp
		islands,
		zeppelin.mesh,
	)
	// isometric view
	scene.rotation.x = Math.PI / 4
	scene.rotation.y = - Math.PI / 4


	// animation
	const clock = new Clock()
	let delta


	// pointer position
	const pointer = {
		x: 0, // -1..1
		y: 0,
	}

	if (window.matchMedia('(hover)').matches) {

		document.addEventListener('mousemove', ({ clientX, clientY }) => {
			pointer.x = -1 + (clientX / W) * 2
			pointer.y = 1 - (clientY / H) * 2
		})
	}

	// mobile gyroscope
	let gyroscope = {
		x: 0,
		y: 0,
		// initial: {
		// 	x: 0,
		// 	y: 0,
		// },
	}
	let checkOrientation = ({ beta, gamma }) => {
		if (!gyroscope.initial) {
			return gyroscope.initial = {
				x: beta,
				y: gamma,
			}
		}

		gyroscope.x = clamp(-90, (gyroscope.initial.x - beta), 90) || 0
		gyroscope.y = clamp(-45, (gyroscope.initial.y - gamma), 45) || 0

		pointer.y = -1 + (gyroscope.x / 90) * 2
		pointer.x = 1 - (gyroscope.y / 45) * 2
	}

	if (typeof DeviceOrientationEvent.requestPermission === 'function') {
		let button = document.createElement('button')
		button.id = 'gyroscope'

		button.addEventListener('click', () => {
			DeviceOrientationEvent.requestPermission()
				.then(permissionState => {
					if (permissionState === 'granted')
						window.addEventListener('deviceorientation', checkOrientation)
						button.classList.add('hidden')
					})
				.catch(console.log)
		})
		document.body.appendChild(button)

	} else window.addEventListener('deviceorientation', checkOrientation)

	// when all loaded
	// time
	const time = new Time()
	let hours = +time.getHours()

	let updateLights = hours => {
		if (hours >= breakpoints[0] && hours < breakpoints[1]) {
			container.className = 'sunrise'
			setLights('sunrise')
	
		} else if (hours >= breakpoints[1] && hours < breakpoints[2]) {
			container.className = 'midday'
			setLights('midday')
	
		} else if (hours >= breakpoints[2] && hours < breakpoints[3]) {
			container.className = 'sunset'
			setLights('sunset')

		} else {
			container.className = 'midnight'
			materials.line.color.setHex(0x111111)
			setLights('midnight')
		}
	}
	updateLights(hours)


	// vane
	const vane = middleIsland.windvane.vane

	// animation
	let easing = .05
	let i = 0

	let draw = () => {

		delta = clock.getDelta()

		// fans
		middleIsland.fans[0].rotate(5 * delta)
		middleIsland.fans[1].rotate(6 * delta)

		topIsland.fans[0].rotate(-2 * delta)
		topIsland.fans[1].rotate(-4 * delta)


		// windvane
		middleIsland.windvane.rotateFan(delta)


		// waves
		river[0].moveWaves()
		river[1].moveWaves()
		river[2].moveWaves()

		zeppelin.fans[0].rotate(20 * delta)
		zeppelin.fans[1].rotate(21 * delta)
		zeppelin.fans[2].rotate(19 * delta)
		zeppelin.fans[3].rotate(22 * delta)
		zeppelin.cabine.turbines[0].rotate(.25 * delta)
		zeppelin.cabine.turbines[1].rotate(.25 * delta)

		zeppelin.mesh.position.y += Math.sin(i * Math.PI)
		islands.position.y += Math.cos(i * Math.PI) / 2

		vane.rotation.y += Math.cos(i * Math.PI) * easing / 10
		
		i += .01

		scene.rotation.x += (-pointer.y * (Math.PI / 10) + (Math.PI / 4) - scene.rotation.x) * easing
		scene.rotation.y += (pointer.x * (Math.PI / 8) - (Math.PI / 4) - scene.rotation.y) * easing

		renderer.render(scene, camera)
	}

	let rafId = null
	let update = () => {
		rafId = requestAnimationFrame(update)
		draw()
	}

	let start = () => {
		update()
	}

	let stop = () => {
		cancelAnimationFrame(rafId)
	}

	// dat.GUI
	let gui = new dat.GUI({
		autoplace: false,
		hideable: false,
	})
	gui.closed = true

	const guiContainer = document.getElementById('gui')
	guiContainer.appendChild(gui.domElement)

	// let directionalLight = gui.addFolder('scene light');
	// directionalLight.add(scene.children[2].position, 'x', (- 1000), 1000);
	// directionalLight.add(scene.children[2].position, 'y', (- 1000), 1000);
	// directionalLight.add(scene.children[2].position, 'z', (- 1000), 1000);
	// directionalLight.open();

	let params = {
		cameraControls: true,
		isOverride: false,
		sunrise: 	() => updateLights(7),
		midday: 	() => updateLights(11),
		sunset: 	() => updateLights(19),
		midnight: 	() => updateLights(0),
	}

	// gui.add(params, 'cameraControls').onChange(() => {
	// 	controls.enabled = (params.cameraControls) ? true : false
	// }).name('camera controls');

	// gui.add(params, 'isOverride').onChange(() => {
	// 	scene.overrideMaterial = (params.isOverride) ? materials.override : false;
	// }).name('wireframe');
	
	let dayTimeGUI = gui.addFolder('daytime')
	dayTimeGUI.add(params, 'sunrise')
	dayTimeGUI.add(params, 'midday')
	dayTimeGUI.add(params, 'sunset')
	dayTimeGUI.add(params, 'midnight')
	dayTimeGUI.open()

	// console.log(scene);
	// console.log(renderer.info);

	// export scene
	if (process.env.NODE_ENV === 'development') {

		console.log('press s to save scene to json')

		document.addEventListener('keypress', ({ keyCode }) => {
			if (keyCode === 115) {
				let json = JSON.stringify(scene.toJSON())

				let blob = new Blob([json], { type: 'application/json' })

				let url  = URL.createObjectURL(blob)
		
				let a = document.createElement('a')
				a.download = 'scene.json'
				a.href = url
				a.textContent = 'Download scene.json'
		
				a.click()
			}
		})
	}

	return { draw, start, stop }
}

export default init