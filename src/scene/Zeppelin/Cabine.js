import {
	Mesh,
	CylinderGeometry,
	Object3D } from 'three';

import { materials } from '../../modules/materials';

import Turbine from './Turbine';


export default class Cabine {
	constructor() {
		
		this.mesh = new Object3D();
		this.mesh.name = 'cabine';


		// this
		const cabine = new Mesh(
			new CylinderGeometry(150, 100, 80, 16, 1),
			materials.darkMetal
		);
		cabine.scale.x = .5;
		cabine.updateMatrix();


		// turbine
		this.turbines = [];

		const turbineParams = [
			{x: 200, y: -50, z: 0, rx: 0, ry: 0, rz: 0},
			{x: -200, y: -50, z: 0, rx: Math.PI, ry: Math.PI, rz: Math.PI / 4},
		];

		for (let i = 0; i < turbineParams.length; i++) {
			const turbine = new Turbine();
			turbine.mesh.position.set(
				turbineParams[i].x,
				turbineParams[i].y,
				turbineParams[i].z
			);

			turbine.mesh.rotation.set(
				turbineParams[i].rx,
				turbineParams[i].ry,
				turbineParams[i].rz
			);

			turbine.mesh.rotation.z -= Math.PI / 8;

			this.turbines.push(turbine);
		};



		// final
		this.mesh.add(
			cabine,
			...(this.turbines.map(turbine => turbine.mesh))
		);
		this.mesh.castShadow = true;
		this.mesh.receiveShadow = true;
	}
}