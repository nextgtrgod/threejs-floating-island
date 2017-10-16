import {
	Geometry,
	Mesh,
	Object3D,
	CylinderGeometry,
	TorusGeometry
} from 'three';

import { materials } from '../modules/materials';

import PipeConnection from './pipeConnection';


export default class PipeCorner {
	constructor(isBottomConnection = true, isTopConnection = true) {

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

		singleGeometry.merge(arc.geometry, arc.matrix);


		// connections
		if (isTopConnection) {
			const topConnection = (new PipeConnection()).mesh;
			topConnection.rotation.z += Math.PI / 2;
			topConnection.position.y += 2 * radius;
			topConnection.updateMatrix();

			singleGeometry.merge(topConnection.geometry, topConnection.matrix);
		};

		if (isBottomConnection) {
			const bottomConnection = (new PipeConnection()).mesh;
			bottomConnection.position.x -= 2 * radius;
			bottomConnection.updateMatrix();

			singleGeometry.merge(bottomConnection.geometry, bottomConnection.matrix);
		};


		// final mesh
		const pipeCorner = new Mesh(singleGeometry, materials.lightMetal);
		pipeCorner.castShadow = true;
		pipeCorner.receiveShadow = true;

		this.mesh = pipeCorner;
	}
}