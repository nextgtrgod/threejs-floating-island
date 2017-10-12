import { Object3D, ExtrudeGeometry, Geometry, Mesh } from 'three';

import { materials } from '../../modules/materials';

import Balloon from './Balloon';
import Fan from './Fan';
import Tanks from './Tanks';


export default class Zeppelin {
	constructor() {

		this.mesh = new Object3D();
		this.mesh.position.set(-400, 600, 900);

		this.mesh.castShadow = true;
		this.mesh.receiveShadow = true;


		const balloon = (new Balloon()).mesh;
		
		
		// fans
		this.fans = [];

		const fansParams = [
			{x: 250, y: 0, z: 200, ry: 0, full: true, mirrored: false},
			{x: 240, y: 0, z: -200, ry: 0, full: true, mirrored: true},
			{x: -250, y: 0, z: 200, ry: Math.PI, full: false, mirrored: false},
			{x: -240, y: 0, z: -200, ry: Math.PI, full: false, mirrored: false}
		];

		for (let i = 0; i < fansParams.length; i++) {
			const fan = new Fan(fansParams[i].full, fansParams[i].mirrored);
			fan.mesh.position.set(
				fansParams[i].x,
				fansParams[i].y,
				fansParams[i].z
			);
			fan.mesh.rotation.y += fansParams[i].ry;
			// fan.mesh.rotation.x += Math.PI;
			this.fans.push(fan);
		};


		// fuel tanks
		const tanks = (new Tanks()).mesh;
		tanks.rotation.z -= Math.PI / 8;
		tanks.position.set(220, -65, -50);


		this.mesh.add(
			balloon,
			...(this.fans.map(fan => fan.mesh)),
			tanks
		);
	}
}