import { DirectionalLight } from 'three';


export default function createSun() {

	let sunLight = new DirectionalLight(0xffffff, .75);

	sunLight.position.set(-280, 695, 350);
	sunLight.castShadow = true;

	sunLight.shadow.camera.left 	= -800;
	sunLight.shadow.camera.right 	= 800;
	sunLight.shadow.camera.top 		= 800;
	sunLight.shadow.camera.bottom 	= -800;
	sunLight.shadow.camera.near 	= 1;
	sunLight.shadow.camera.far 		= 1500;

	sunLight.shadow.mapSize.width 	= 512;
	sunLight.shadow.mapSize.height 	= 512;

	return sunLight;
}