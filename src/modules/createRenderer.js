import { WebGLRenderer } from 'three';


export default function createRenderer(id, width, height, antialias = true) {

	const renderer = new WebGLRenderer({
		alpha: true,
		antialias: antialias
	});

	renderer.setSize(width, height);

	renderer.shadowMap.enabled = true;
	renderer.shadowMap.renderReverseSided = true;

	const container = document.getElementById(id);
	container.appendChild(renderer.domElement);

	return renderer;
}