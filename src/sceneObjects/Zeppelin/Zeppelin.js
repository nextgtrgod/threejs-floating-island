import { Object3D, ExtrudeGeometry, Geometry, Mesh } from 'three';

import { materials } from '../../modules/materials';

import Balloon from './Balloon';
import Fan from './Fan';


export default class Zeppelin {
	constructor() {

		this.mesh = new Object3D();
		this.mesh.position.set(-400, 600, 900);

		this.mesh.castShadow = true;
		this.mesh.receiveShadow = true;


		const balloon = (new Balloon()).mesh;
		

		const fan = new Fan();
		fan.mesh.position.set(260, 0, 200);

		this.fans = [];
		this.fans.push(fan);

		this.mesh.add(
			balloon,
			fan.mesh
		);
	}
}