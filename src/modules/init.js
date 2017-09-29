// import { GridHelper } from 'three';

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

	let bottomIsland = (new BottomIsland()).mesh;
	let middleIsland = (new MiddleIsland()).mesh;
	let topIsland = (new TopIsland()).mesh;


	bottomIsland.rotation.y = - Math.PI / 4;
	bottomIsland.rotation.x = Math.PI / 8;
	middleIsland.rotation.y = - Math.PI / 4;
	middleIsland.rotation.x = Math.PI / 8;
	topIsland.rotation.y = - Math.PI / 4;
	topIsland.rotation.x = Math.PI / 8;


	// let grid = new GridHelper(1000, 100);
	
	scene.add(bottomIsland, middleIsland, topIsland);

	// animation
	function loop() {

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
	cameraPosition.add(camera.position, 'y', -500, 500);
	cameraPosition.add(camera.position, 'z', -1500, 1500);
	cameraPosition.open();

	let cameraRotation = gui.addFolder('camera rotation');
	cameraRotation.add(camera.rotation, 'x', - Math.PI * 2, Math.PI * 2);
	cameraRotation.add(camera.rotation, 'y', - Math.PI * 2, Math.PI * 2);
	cameraRotation.add(camera.rotation, 'z', - Math.PI * 2, Math.PI * 2);
	cameraRotation.open();
	
}