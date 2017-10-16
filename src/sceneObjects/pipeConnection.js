import {
	Geometry,
	Mesh,
	CylinderGeometry,
	TorusGeometry
} from 'three';

import { materials } from '../modules/materials';


export default class PipeConnection {
	constructor(
		m = 1,
		isFrontRing = true,
		isBackRing = true,
		radius = 35,
		segmentsCount = 16,
		needMaterial = false) {

		const geometry = new Geometry();

		this.radius = radius;
		this.segmentsCount = segmentsCount;
		
		const material = (needMaterial) ? materials.lightMetal : null;


		// base
		const base = new Mesh(
			new CylinderGeometry( radius, radius, (24 * m), 20, 1, true )
		);
		base.rotation.y = (2 * Math.PI / 80);
		base.updateMatrix();

		geometry.merge(base.geometry, base.matrix);


		// rings
		if (isFrontRing) {
			const frontRing = new Mesh(
				new TorusGeometry( radius, 6, 10, 16, (2 * Math.PI) )
			);
			frontRing.position.y = 12 * m;
			frontRing.rotation.x = Math.PI / 2;
			frontRing.updateMatrix();
			geometry.merge(frontRing.geometry, frontRing.matrix);
		};

		if (isBackRing) {
			const backRing = new Mesh(
				new TorusGeometry( radius, 6, 10, 16, (2 * Math.PI) )
			);
			backRing.position.y = -12 * m;
			backRing.rotation.x = Math.PI / 2;
			backRing.updateMatrix();
			geometry.merge(backRing.geometry, backRing.matrix);
		};

	
		// segments
		const segmentGeometry = new CylinderGeometry( 2, 2, (24 * m), 3, 1, true );
		
		for (let i = 0; i < this.segmentsCount; i++) {

			const segment = new Mesh(segmentGeometry);

			segment.position.set(
				radius * (Math.cos(i * (2 *Math.PI) / this.segmentsCount)),
				0,
				radius * (Math.sin(i * (2 * Math.PI) / this.segmentsCount))
			);
			segment.updateMatrix();

			geometry.merge(segment.geometry, segment.matrix);
		};


		this.mesh = new Mesh(geometry, material);
		this.mesh.name = 'pipe-connection';
	}
}