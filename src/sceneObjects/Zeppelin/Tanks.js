import {
	Mesh,
	Geometry,
	CylinderGeometry,
	LatheGeometry,
	Vector2 } from 'three';

import Cube from '../../modules/Cube';
import { materials } from '../../modules/materials';


export default class Tanks {
	constructor() {

		const tanksGeometry = new Geometry();


		// single tank
		const tankGeometry = new Geometry();
		const tankRadius = 30;


		const tankCenter = new Mesh(
			new CylinderGeometry(tankRadius, tankRadius, 70, 16, 1)
		);

		const tankTopPoints = [];

		for (let i = 0; i < 16; i++) {
			tankTopPoints.push(
				new Vector2(
					tankRadius * Math.cos( i * (Math.PI / 32) ),
					tankRadius * Math.sin( i * (Math.PI / 32) ) / 2
				)
			);
		};

		const tankTop = new Mesh(
			new LatheGeometry( tankTopPoints, 12 ),
		);
		tankTop.position.y = 35;
		tankTop.updateMatrix();

		const tankBottom = tankTop.clone();
		tankBottom.rotation.z += Math.PI;
		tankBottom.position.y = -35;
		tankBottom.updateMatrix();

		const tankHub = new Mesh(new CylinderGeometry(8, 8, 10, 8, 1));
		tankHub.position.y += 50;
		tankHub.updateMatrix();

		tankGeometry.merge(tankCenter.geometry, tankCenter.matrix);
		tankGeometry.merge(tankTop.geometry, tankTop.matrix);
		tankGeometry.merge(tankBottom.geometry, tankBottom.matrix);
		tankGeometry.merge(tankHub.geometry, tankHub.matrix);


		// tank merge
		const tankLeft = new Mesh(tankGeometry);
		tankLeft.position.z += 35;
		tankLeft.updateMatrix();

		const tankRight = tankLeft.clone();
		tankRight.position.z -= 70;
		tankRight.updateMatrix();


		// frame
		const frame = (new Cube( [5, 4, 80] )).mesh;
		frame.position.y += 52;
		frame.updateMatrix();


		// tier
		const tier = new Mesh(
			new CylinderGeometry(2, 2, 120, 6, 1)
		);
		tier.position.set( -60, 52, 0 )
		tier.rotation.z -= Math.PI / 2;
		tier.updateMatrix();


		tanksGeometry.merge(tankLeft.geometry, tankLeft.matrix);
		tanksGeometry.merge(tankRight.geometry, tankRight.matrix);
		tanksGeometry.merge(frame.geometry, frame.matrix);
		tanksGeometry.merge(tier.geometry, tier.matrix);
		
		this.mesh = new Mesh(tanksGeometry, materials.lightMetal);
		this.mesh.name = 'fuel-tanks';
		this.mesh.castShadow = true;
		this.mesh.receiveShadow = true;
	}
}