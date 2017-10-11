import {
	Geometry,
	Mesh,
	Object3D,
	CylinderGeometry,
	TorusGeometry
} from 'three';

import { materials } from '../modules/materials';


export default class PipeCorner {
	constructor(isBottomConnection = true) {

		this.mesh = new Object3D();
		this.mesh.name = 'pipe-corner';

		const singleGeometry = new Geometry();

		// pipe radius
		const radius = 35;
	
		// arc
		const arcGeometry = new TorusGeometry((2 * radius), radius, 40, 40, (Math.PI / 2) );
		const arc = new Mesh(arcGeometry);
		arc.rotation.z = Math.PI / 2;
		arc.updateMatrix();


		// connection
		const connectionGeometry = new Geometry();
		{
			// base
			const baseGeometry = new CylinderGeometry(radius, radius, 20, 20, 1 ,true);
			const base = new Mesh(baseGeometry);
			base.rotation.y = (2 * Math.PI / 80);
			base.updateMatrix();


			// rings
			const ringGeometry = new TorusGeometry((radius + 1), 6, 10, 16, (2 * Math.PI) );
			const ring = new Mesh(ringGeometry);
			ring.position.y += 8;
			ring.rotation.x = Math.PI / 2;
			ring.updateMatrix();

			const bottomRing = ring.clone();
			bottomRing.position.y -= 24;
			bottomRing.updateMatrix();

	
			// segments
			const segmentGeometry = new CylinderGeometry(2, 2, 24, 3, 1, true);
			
			for (let i = 0; i < 16; i++) {
				const segment = new Mesh(segmentGeometry);
				segment.position.set(
					(radius + 1) * (Math.cos(i * Math.PI / 8)),
					0,
					(radius + 1) * (Math.sin(i * Math.PI / 8))
				);

				segment.updateMatrix();
				connectionGeometry.merge(segment.geometry, segment.matrix);
			};

			connectionGeometry.merge(base.geometry, base.matrix);
			connectionGeometry.merge(ring.geometry, ring.matrix);
			connectionGeometry.merge(bottomRing.geometry, bottomRing.matrix);
		};
		const connection = new Mesh(connectionGeometry);
		connection.position.y += (2 * radius);
		connection.rotation.z += Math.PI / 2;
		connection.updateMatrix();

		if (isBottomConnection) {
			const bottomConnection = connection.clone();

			bottomConnection.position.set(-(2 * radius), -20, 0);
			bottomConnection.rotation.z += Math.PI / 2;
			bottomConnection.updateMatrix();

			singleGeometry.merge(bottomConnection.geometry, bottomConnection.matrix);
		};

		// final mesh
		singleGeometry.merge(arc.geometry, arc.matrix);
		singleGeometry.merge(connection.geometry, connection.matrix);


		const pipeCorner = new Mesh(singleGeometry, materials.lightMetal);
		pipeCorner.position.y += 10;
		pipeCorner.castShadow = true;
		pipeCorner.receiveShadow = true;

		this.mesh.add(
			pipeCorner
		);
	}
}