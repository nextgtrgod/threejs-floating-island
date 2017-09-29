import { WebGLRenderer } from 'three';


export default function createRenderer() {

	let HEIGHT = window.innerHeight;
	let WIDTH = window.innerWidth;


	let renderer = new WebGLRenderer({
		alpha: true,
		antialias: false
	});

	renderer.setSize(WIDTH, HEIGHT);
	renderer.shadowMap.enabled = true;

	const container = document.getElementById('world');
	container.appendChild(renderer.domElement);

	return renderer;
}