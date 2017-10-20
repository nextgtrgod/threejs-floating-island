import { PerspectiveCamera } from 'three';


export default function createCamera(width, height) {

	let aspectRatio = width / height;
	const fieldOfView = 50;
	const nearPlane = 1;
	const farPlane = 3500;

	let camera = new PerspectiveCamera(
		fieldOfView,
		aspectRatio,
		nearPlane,
		farPlane
	);

	camera.position.set(0, -350, 2150);
	camera.rotation.set(.20, .036, 0);

	return camera;
}