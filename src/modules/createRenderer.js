import { WebGLRenderer, PCFSoftShadowMap } from 'three';


export default function createRenderer() {

	let HEIGHT = window.innerHeight;
	let WIDTH = window.innerWidth;


	let renderer = new WebGLRenderer({
		alpha: true,
		antialias: true
	});

	renderer.setSize(WIDTH, HEIGHT);
	renderer.shadowMap.enabled = true;
	// renderer.shadowMap.type = PCFSoftShadowMap;

	renderer.shadowMap.renderReverseSided = true;

	// renderer.gammaInput = true;
	// renderer.gammaOutput = true;

	const container = document.getElementById('world');
	container.appendChild(renderer.domElement);

	return renderer;
}