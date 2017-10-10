import Stats from 'stats.js';

const THREE = require('three');

const OrbitControls = require('three-orbit-controls')(THREE);

import { Vector3, Clock, AxisHelper, CameraHelper } from 'three';
import { EffectComposer, RenderPass, BokehPass } from 'postprocessing';

import createScene from './createScene';
import createCamera from './createCamera';
import createRenderer from './createRenderer';
import createLights from './createLights';


import BottomIsland from '../sceneObjects/BottomIsland/BottomIsland';
import MiddleIsland from '../sceneObjects/MiddleIsland/MiddleIsland';
import TopIsland from '../sceneObjects/TopIsland/TopIsland';

import Water from './Water';


export default function init() {

	let scene = createScene();
	let camera = createCamera();
	let renderer = createRenderer();
	createLights(scene);

	const effectComposer = new EffectComposer(renderer);
	effectComposer.addPass(new RenderPass(scene, camera));

	const bokehPass = new BokehPass(camera, {
		focus: .1,
		dof: .095
	});
	bokehPass.renderToScreen = true;
	effectComposer.addPass(bokehPass);

	console.log(bokehPass);

	// orbit controls
	const controls = new OrbitControls(camera);


	let bottomIsland = new BottomIsland();
	let middleIsland = new MiddleIsland();
	let topIsland = new TopIsland();

	// const axisHelper = new AxisHelper( 400 );
	// const cameraHelper = new CameraHelper( camera );


	// river parts
	const river = [];
	{
		const pathPoints = [
			new Vector3(-450, 710, 40),
			new Vector3(-380, 620, 40),
			new Vector3(-195, 600, 40),
			new Vector3(-180, 210, 40),
			new Vector3(-60, 210, 50),
			new Vector3(-20, 210, 100),
			new Vector3(15, 205, 210),
			new Vector3(0, -180, 230),
			new Vector3(0, -180, 580)
		];

		const riverPart = new Water(pathPoints, 25);
		
		river.push(riverPart);

		scene.add(riverPart.mesh);
	};

	//
	scene.add(
		bottomIsland.mesh,
		middleIsland.mesh,
		topIsland.mesh
	);
	scene.rotation.x = Math.PI / 6;
	scene.rotation.y = - Math.PI / 4;


	// when all loaded
	document.body.classList.add('loaded');


	// status (only dev)
	const stats = new Stats();
	stats.showPanel(0);
	document.body.appendChild(stats.dom);


	// animation
	const clock = new Clock();
	let delta;

	// vane
	middleIsland.windvane.rotateVane(Math.random() * (2 * Math.PI));

	function loop() {

		//
		stats.begin();
		//

		delta =  clock.getDelta();

		// fans
		middleIsland.fans[0].rotate(5 * delta);
		middleIsland.fans[1].rotate(10 * delta);

		topIsland.fans[0].rotate(-2 * delta);
		topIsland.fans[1].rotate(-4 * delta);


		// windvane
		middleIsland.windvane.rotateFan(delta);


		// waves
		river[0].moveWaves();



		renderer.render(scene, camera);
		// effectComposer.render(delta);

		//
		stats.end();
		//

		requestAnimationFrame(loop);
	};
	loop();


	// dat.GUI
	let gui = new dat.GUI({ autoplace: false });
	const guiContainer = document.getElementById('gui');
	guiContainer.appendChild(gui.domElement);

	let directionalLight = gui.addFolder('scene light');
	directionalLight.add(scene.children[1].position, 'x', (- 1000), 1000);
	directionalLight.add(scene.children[1].position, 'y', (- 1000), 1000);
	directionalLight.add(scene.children[1].position, 'z', (- 1000), 1000);
	directionalLight.open();

	gui.add(controls, 'enabled');


	console.log(scene);
	console.log(renderer.info);

}