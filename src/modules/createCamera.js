import { PerspectiveCamera } from 'three';


export default function createCamera() {

	let HEIGHT = window.innerHeight;
	let WIDTH = window.innerWidth;


	let aspectRatio = WIDTH / HEIGHT;
	const fieldOfView = 50;
	const nearPlane = 1;
	const farPlane = 4000;

	let camera = new PerspectiveCamera(
		fieldOfView,
		aspectRatio,
		nearPlane,
		farPlane
	);

	camera.position.x = 0;
	camera.position.y = 0;
	camera.position.z = 2000;

	camera.lookAt(200, 0, 0);

	return camera;
}