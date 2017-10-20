import { Object3D, ExtrudeGeometry, Geometry, Mesh, Vector3 } from 'three';

import { materials } from '../../modules/materials';

import Balloon from './Balloon';
import Fan from './Fan';
import Tanks from './Tanks';
import Cabine from './Cabine';
import Hose from './hose';


export default class Zeppelin {
	constructor() {

		this.mesh = new Object3D();
		this.mesh.name = 'zeppelin';

		this.mesh.position.set(-400, 550, -900);


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


		// hoses
		const hosesGeometry = new Geometry();

		const hosesParams = [
			[
				new Vector3(200, -110, -15),
				new Vector3(210, -150, 20),
				new Vector3(195, -10, 60),
				new Vector3(195, -50, 100),
				new Vector3(220, 0, 160)
			],
			[
				new Vector3(200, -110, -85),
				new Vector3(210, -160, -140),
				new Vector3(220, 20, -180)
			]
		];

		for (let i = 0; i < hosesParams.length; i++) {
			const hose = (new Hose( 4, hosesParams[i], 40 )).mesh;

			hosesGeometry.merge(hose.geometry, hose.matrix);
		};

		const hoses = new Mesh(hosesGeometry, materials.lightMetal);
		hoses.castShadow = true;
		hoses.receiveShadow = true;


		// cabine
		this.cabine = new Cabine();
		this.cabine.mesh.position.y -= 210;


		this.mesh.add(
			this.cabine.mesh,
			balloon,
			...(this.fans.map(fan => fan.mesh)),
			tanks,
			hoses
		);

		// this.mesh.rotation.z = Math.PI;
	}
}