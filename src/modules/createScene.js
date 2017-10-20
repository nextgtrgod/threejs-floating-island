import { Scene, Fog } from 'three';

import { colors } from './colors';


export default function createScene() {

	let scene = new Scene();
	// scene.fog = new Fog(colors.sky, 0, 10000);

	return scene;
}