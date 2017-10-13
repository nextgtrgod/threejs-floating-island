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
import Zeppelin from '../sceneObjects/Zeppelin/Zeppelin';

import Water from './Water';

// temp
import { materials } from './materials';


export default function init() {

	let scene = createScene();
	let camera = createCamera();
	let renderer = createRenderer();
	createLights(scene);

	// const effectComposer = new EffectComposer(renderer);
	// effectComposer.addPass(new RenderPass(scene, camera));

	// const bokehPass = new BokehPass(camera, {
	// 	focus: .1,
	// 	dof: .095
	// });
	// bokehPass.renderToScreen = true;
	// effectComposer.addPass(bokehPass);

	// orbit controls
	const controls = new OrbitControls(camera);


	const bottomIsland = new BottomIsland();
	const middleIsland = new MiddleIsland();
	const topIsland = new TopIsland();
	const zeppelin = new Zeppelin();


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
	};

	{
		const pathPoints = [
			new Vector3(0, -270, 675),
			new Vector3(0, -380, 675)
		];

		const riverPart = new Water(pathPoints, 4);
		
		river.push(riverPart);
	};

	river.map(riverPart => scene.add(riverPart.mesh));



	//
	scene.add(
		bottomIsland.mesh,
		middleIsland.mesh,
		topIsland.mesh,
		zeppelin.mesh
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
	let i = 0;
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
		river[1].moveWaves();

		// zeppelin
		zeppelin.fans[0].rotate(20 * delta);
		zeppelin.fans[1].rotate(21 * delta);
		zeppelin.fans[2].rotate(19 * delta);
		zeppelin.fans[3].rotate(22 * delta);
		zeppelin.cabine.turbines[0].rotate(.25 * delta);
		zeppelin.cabine.turbines[1].rotate(.25 * delta);

		zeppelin.mesh.position.y += Math.sin(i * Math.PI);
		i += .01;


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

	let params = {
		cameraControls: true,
		isOverride: false
	};

	gui.add(params, 'cameraControls').onChange(() => {
		controls.enabled = (params.cameraControls) ? true : false
	}).name('camera controls');

	gui.add(params, 'isOverride').onChange(() => {
		scene.overrideMaterial = (params.isOverride) ? materials.override : false;
	}).name('wireframe');

	// let bokehParams = bokehPass.bokehMaterial.uniforms;
	// let { aperture, aspect, cameraFar, cameraNear, dof, focus, maxBlur} = bokehParams;


	// gui.add(aperture, 'value').min(0).max(1).step(.001).name('aperture');
	// gui.add(aspect, 'value').min(0).max(10).step(.01).name('aspect');
	// gui.add(cameraFar, 'value').min(-5000).max(5000).step(10).name('cameraFar');
	// gui.add(cameraNear, 'value').min(-5000).max(5000).step(10).name('cameraNear');
	// gui.add(dof, 'value').min(0).max(1).step(.01).name('dof');
	// gui.add(focus, 'value').min(0).max(1).step(.01).name('focus');
	// gui.add(maxBlur, 'value').min(0).max(1).step(.01).name('maxBlur');


	console.log(scene);
	console.log(renderer.info);
	// console.log(bokehPass);

}