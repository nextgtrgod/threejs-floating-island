import Stats from 'stats.js'
import * as dat from 'dat.gui'

// const THREE = require('three');

// const OrbitControls = require('three-orbit-controls')(THREE);

import {
	HemisphereLight,
	AmbientLight,
	Object3D,
	Vector3,
	Clock,
	DirectionalLightHelper } from 'three';


import createScene from './createScene';
import createCamera from './createCamera';
import createRenderer from './createRenderer';
import createSun from './createSun';


import BottomIsland from '../sceneObjects/BottomIsland/BottomIsland';
import MiddleIsland from '../sceneObjects/MiddleIsland/MiddleIsland';
import TopIsland from '../sceneObjects/TopIsland/TopIsland';
import Zeppelin from '../sceneObjects/Zeppelin/Zeppelin';

import Water from './Water';
import LampPost from './LampPost';

// temp
import { materials } from './materials';

import { lightParams } from './lightParams';
import { breakpoints } from './daytimeParams';

import Time from './Time';


export default async function init() {

	let WIDTH = window.innerWidth;
	let HEIGHT = window.innerHeight;

	window.addEventListener('resize', () => {
		WIDTH = window.innerWidth;
		HEIGHT = window.innerHeight;

		renderer.setSize(WIDTH, HEIGHT);
		camera.aspect = WIDTH / HEIGHT;
		camera.updateProjectionMatrix();
	}, false);


	// main
	const scene = createScene();
	const camera = createCamera(WIDTH, HEIGHT);
	const renderer = await createRenderer('world', WIDTH, HEIGHT, true);


	// lights (default params)
	const hemisphereLight = new HemisphereLight(0xaaaaaa, 0x000000, .9);
	const ambientLight = new AmbientLight(0x404040, .5);
	const sunLight = createSun();




	function setLights(dayTime) {

		hemisphereLight.intensity = lightParams[dayTime].hemisphereLight.intensity;

		ambientLight.intensity = lightParams[dayTime].ambientLight.intensity;

		sunLight.intensity = lightParams[dayTime].sunLight.intensity;
		sunLight.color.setHex(lightParams[dayTime].sunLight.color);
		sunLight.position.set(...lightParams[dayTime].sunLight.position);

		
		if (dayTime === 'midnight') {
			lampPosts.map(lampPost => lampPost.turnLights(true) );
			materials.line.color.setHex( 0x111111 );
		} else {
			lampPosts.map(lampPost => lampPost.turnLights() )
			materials.line.color.setHex( 0xdcbbb4 );
		}
	};


	// orbit controls
	// const controls = new OrbitControls(camera);
	// controls.enabled = false;


	const bottomIsland = new BottomIsland();
	const middleIsland = new MiddleIsland();
	const topIsland = new TopIsland();
	const zeppelin = new Zeppelin();

	const islands = new Object3D();
	islands.name = 'islands';

	islands.add(
		bottomIsland.mesh,
		middleIsland.mesh,
		topIsland.mesh,
	);


	// river parts
	const river = [];

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
				new Vector3(0, -180, 570)
			],
			steps: 25
		},
		{
			points: [
				new Vector3(0, -250, 665),
				new Vector3(0, -380, 665)
			],
			steps: 4
		},
		{
			points: [
				new Vector3(-450, 90, 80),
				new Vector3(-450, 0, 80),
			],
			steps: 2
		}
	];

	for (let i = 0; i < riverParams.length; i++) {
		river.push(
			new Water(
				riverParams[i].points,
				riverParams[i].steps
			)
		);
	};

	river.map(riverPart => islands.add(riverPart.mesh));


	// lamp posts
	let lampPosts = [];

	const lampPostParams = [
		{ x: -215, y: 650, z: -185, ry: 0 },
		{ x: -215, y: 650, z: 185, ry: Math.PI },
		{ x: 180, y: 250, z: -175, ry: -Math.PI / 4 },
		{ x: 170, y: -150, z: 400, ry: -Math.PI / 2 }
	];

	for (let i = 0; i < lampPostParams.length; i++) {
		const lampPost = new LampPost();

		lampPost.mesh.position.set(
			lampPostParams[i].x,
			lampPostParams[i].y,
			lampPostParams[i].z
		);

		lampPost.mesh.rotation.y += lampPostParams[i].ry;

		lampPosts.push( lampPost );
	};

	islands.add(
		...(lampPosts.map( lampPost => lampPost.mesh ))
	);


	// final
	scene.add(
		hemisphereLight,
		ambientLight,
		sunLight,
		// sunLightHelper, // temp
		islands,
		zeppelin.mesh
	);
	// isometric view
	scene.rotation.x = Math.PI / 4;
	scene.rotation.y = - Math.PI / 4;


	// status (only dev)
	let stats

	if (process.env.NODE_ENV === 'development') {
		stats = new Stats()
		stats.showPanel(0)
		document.body.appendChild(stats.dom)
	}


	// animation
	const clock = new Clock();
	let delta;


	// mouse position
	const mousePos = {
		x: WIDTH / 2, 	// default
		y: HEIGHT / 2,
		nX: 0,			// normalized
		nY: 0
	};
	document.addEventListener('mousemove', event => {
		mousePos.nX = -1 + (event.clientX / WIDTH) * 2;
		mousePos.nY = 1 - (event.clientY / HEIGHT) * 2;
	});


	// mobile gyroscope
	const gyroscope = {
		x: 0,
		y: 0,
	};
	window.addEventListener('deviceorientation', event => {

		if (event.beta && event.gamma) {
	
			gyroscope.x = event.beta;	// -180..180
			gyroscope.y = event.gamma;	// -90..90
	
			if (gyroscope.x > 90)  { gyroscope.x = 90 };
			if (gyroscope.x < -90) { gyroscope.x = -90 };
	
			if (gyroscope.y > 45)  { gyroscope.y = 45 };
			if (gyroscope.y < -45) { gyroscope.y = -45 };
	
			mousePos.nY = -1 + (gyroscope.x / 90) * 2;
			mousePos.nX = 1 - (gyroscope.y / 45) * 2;

		};

	}, true);


	// when all loaded
	// time
	const time = new Time();
	let hours = +time.getHours();


	let worldNode = document.getElementById('world');

	function updateLights(hours) {
		if (hours >= breakpoints[0] && hours < breakpoints[1]) {
			worldNode.className = 'sunrise';
			setLights('sunrise');
	
		} else if (hours >= breakpoints[1] && hours < breakpoints[2]) {
			worldNode.className = 'midday';
			setLights('midday');
	
		} else if (hours >= breakpoints[2] && hours < breakpoints[3]) {
			worldNode.className = 'sunset';
			setLights('sunset');

		} else {
			worldNode.className = 'midnight';
			materials.line.color.setHex(0x111111);
			setLights('midnight');
		};
	};

	updateLights(hours);


	// vane
	const vane = middleIsland.windvane.vane

	// animation
	let easing = .05
	let i = 0

	document.body.classList.add('loaded')

	function loop() {

		//
		if (stats) stats.begin()

		delta =  clock.getDelta()

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

		// zeppelin
		zeppelin.fans[0].rotate(20 * delta)
		zeppelin.fans[1].rotate(21 * delta)
		zeppelin.fans[2].rotate(19 * delta)
		zeppelin.fans[3].rotate(22 * delta)
		zeppelin.cabine.turbines[0].rotate(.25 * delta)
		zeppelin.cabine.turbines[1].rotate(.25 * delta)

		// fly
		zeppelin.mesh.position.y += Math.sin(i * Math.PI)
		islands.position.y += Math.cos(i * Math.PI) / 2

		// windvane
		vane.rotation.y += Math.cos(i * Math.PI) * easing / 10
		
		i += .01


		// camera
		scene.rotation.x += (-mousePos.nY * (Math.PI / 10) + (Math.PI / 4) - scene.rotation.x) * easing
		scene.rotation.y += (mousePos.nX * (Math.PI / 8) - (Math.PI / 4) - scene.rotation.y) * easing


		renderer.render(scene, camera)
		time.update()

		//
		if (stats) stats.end()

		requestAnimationFrame(loop)
	}
	loop()


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


	// dat.GUI
	let gui = new dat.GUI({ autoplace: false });
	gui.closed = true;

	const guiContainer = document.getElementById('gui');
	guiContainer.appendChild(gui.domElement);

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
		midnight: 	() => updateLights(0)
	};

	// gui.add(params, 'cameraControls').onChange(() => {
	// 	controls.enabled = (params.cameraControls) ? true : false
	// }).name('camera controls');

	// gui.add(params, 'isOverride').onChange(() => {
	// 	scene.overrideMaterial = (params.isOverride) ? materials.override : false;
	// }).name('wireframe');
	
	let dayTimeGUI = gui.addFolder('daytime');
	dayTimeGUI.add(params, 'sunrise');
	dayTimeGUI.add(params, 'midday');
	dayTimeGUI.add(params, 'sunset');
	dayTimeGUI.add(params, 'midnight');
	dayTimeGUI.open();

	// console.log(scene);
	// console.log(renderer.info);
}