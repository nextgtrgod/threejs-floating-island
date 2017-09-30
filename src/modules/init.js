// import { GridHelper } from 'three';
import { AxisHelper } from 'three';

import createScene from './createScene';
import createCamera from './createCamera';
import createRenderer from './createRenderer';
import createLights from './createLights';


import BottomIsland from '../sceneObjects/BottomIsland/BottomIsland';
import MiddleIsland from '../sceneObjects/MiddleIsland/MiddleIsland';
import TopIsland from '../sceneObjects/TopIsland/TopIsland';


export default function init() {

	let scene = createScene();
	let camera = createCamera();
	let renderer = createRenderer();
	createLights(scene);


	let bottomIsland = new BottomIsland();
	let middleIsland = new MiddleIsland();
	let topIsland = new TopIsland();

	const axisHelper = new AxisHelper( 400 );

	scene.add(
		bottomIsland.mesh,
		middleIsland.mesh,
		topIsland.mesh,
		axisHelper
	);

	scene.rotation.x = Math.PI / 8;
	scene.rotation.y = - Math.PI / 4;


	// animation
	function loop() {

		// fans
		[...middleIsland.fans].map((fan, index) => {
			fan.propeller.rotation.z += .1 * (index + 1);
		});

		[...topIsland.fans].map((fan, index) => {
			fan.propeller.rotation.z += .05 * (index + 1);
		});


		renderer.render(scene, camera);
		requestAnimationFrame(loop);
	};
	loop();


	// dat.GUI
	let gui = new dat.GUI({ autoplace: false });
	const guiContainer = document.getElementById('gui');
	guiContainer.appendChild(gui.domElement);

	let cameraPosition = gui.addFolder('camera position');
	cameraPosition.add(camera.position, 'x', -500, 500);
	cameraPosition.add(camera.position, 'y', -1000, 1000);
	cameraPosition.add(camera.position, 'z', -3500, 3500);
	cameraPosition.open();

	let cameraRotation = gui.addFolder('camera rotation');
	cameraRotation.add(camera.rotation, 'x', - Math.PI * 2, Math.PI * 2);
	cameraRotation.add(camera.rotation, 'y', - Math.PI * 2, Math.PI * 2);
	cameraRotation.add(camera.rotation, 'z', - Math.PI * 2, Math.PI * 2);
	// cameraRotation.open();

	let sceneRotation = gui.addFolder('scene rotation');
	sceneRotation.add(scene.rotation, 'x', - Math.PI * 2, Math.PI * 2);
	sceneRotation.add(scene.rotation, 'y', - Math.PI * 2, Math.PI * 2);
	sceneRotation.add(scene.rotation, 'z', - Math.PI * 2, Math.PI * 2);
	sceneRotation.open();

	let directionalLight = gui.addFolder('scene light');
	directionalLight.add(scene.children[1].position, 'x', (- 1000), 1000);
	directionalLight.add(scene.children[1].position, 'y', (- 1000), 1000);
	directionalLight.add(scene.children[1].position, 'z', (- 1000), 1000);
	directionalLight.open();


	console.log(scene);

}