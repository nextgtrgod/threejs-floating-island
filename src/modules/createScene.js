import { Scene, Fog } from 'three';

import { colors } from './colors';


export default function createScene() {

	let HEIGHT = window.innerHeight;
	let WIDTH = window.innerWidth;


	let scene = new Scene();
	// scene.fog = new Fog(colors.sky, 0, 10000);

	
	// window.addEventListener('resize', () => {
	// 	HEIGHT = window.innerHeight;
	// 	WIDTH = window.innerWidth;
	// 	renderer.setSize(WIDTH, HEIGHT);
	// 	camera.aspect = WIDTH / HEIGHT;
	// 	camera.updateProjectionMatrix();
	// }, false);


	return scene;
}