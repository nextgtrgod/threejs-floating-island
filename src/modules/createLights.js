import { HemisphereLight, DirectionalLight, AmbientLight } from 'three';


export default function createLights(scene) {

	let hemisphereLight = new HemisphereLight(0xaaaaaa, 0x000000, .9);

	let shadowLight = new DirectionalLight(0xffffff, .9);

	let ambientLight = new AmbientLight(0x404040);
	ambientLight.intensity = .5;

	shadowLight.position.set(-500, 300, 300);
	shadowLight.castShadow = true;
	shadowLight.shadowDarkness = 0;

	shadowLight.shadow.camera.left = -400;
	shadowLight.shadow.camera.right = 400;
	shadowLight.shadow.camera.top = 400;
	shadowLight.shadow.camera.bottom = -400;
	shadowLight.shadow.camera.near = 1;
	shadowLight.shadow.camera.far = 1000;

	shadowLight.shadow.mapSize.width = 512;
	shadowLight.shadow.mapSize.height = 512;


	scene.add(hemisphereLight);  
	scene.add(shadowLight);
	scene.add(ambientLight);
}