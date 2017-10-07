import { Geometry, Mesh } from 'three';

import Cube from '../../modules/Cube';
import { materials } from '../../modules/materials';


export default class Stones {
	constructor() {

		const stonesGeometry = new Geometry();

		for (let i = 0; i < 16; i++) {
			const stone = new Cube(
				[20, 20, 20],
				{
					x: 250 * Math.cos(i * Math.PI / 32),
					y: 0,
					z: -250 * Math.sin(i * Math.PI / 32),
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

		for (let i = 0; i < 12; i++) {
			const stone = new Cube(
				[20, 20, 20],
				{
					x: 150 * Math.cos(i * Math.PI / 24) + 10,
					y: 0,
					z: -150 * Math.sin(i * Math.PI / 24),
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


		this.mesh = new Mesh(stonesGeometry, materials.lightMetal);
		this.mesh.castShadow = true;
		this.mesh.receiveShadow = true;

	}
};