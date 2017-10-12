import { Geometry, Mesh } from 'three';

import Cube from '../modules/Cube';
import { materials } from '../modules/materials';


export default class Stones {
	constructor(coordinates = [ [0, 0, 0] ] ) {

		const stonesGeometry = new Geometry();

		for (let i = 0; i < coordinates.length; i++) {
			const stone = new Cube(
				[30, 40, 30],
				{
					x: coordinates[i][0],
					y: coordinates[i][1],
					z: coordinates[i][2]
				}
			).mesh;

			stone.rotation.set(
				Math.random() * (2 * Math.PI),
				Math.random() * (2 * Math.PI),
				Math.random() * (2 * Math.PI)
			);
			stone.updateMatrix();

			stonesGeometry.merge(stone.geometry, stone.matrix);
		};


		this.mesh = new Mesh(
			stonesGeometry,
			materials.lightMetal
		);

		this.mesh.castShadow = true;
		this.mesh.receiveShadow = true;
	}
};