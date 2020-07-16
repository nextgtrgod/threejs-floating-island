import { Geometry, Mesh } from 'three';

import Cube from '../modules/Cube';

import { materials } from '../modules/materials';


export default class Fence {
	constructor(close = false) {

		const singleGeometry = new Geometry();


		const centerBoard = new Cube(
			[10, 20, 4],
			{x: 0, y: 0, z: 0}
		);
		centerBoard.mesh.updateMatrix();

		const topBoard = new Cube(
			[28, 4, 2],
			{x: -((28 / 2) + (10 / 2)), y: (10 - 4 / 2), z: 0}
		);
		topBoard.mesh.updateMatrix();

		const bottomBoard = new Cube(
			[28, 4, 2],
			{x: -((28 / 2) + (10 / 2)), y: -3, z: 0}
		);
		bottomBoard.mesh.updateMatrix();

		const paling = new Cube(
			[10, 6, 4],
			{x: 0, y: 13, z: 0}
		);

		paling.mesh.geometry.vertices[0].x -= 5;
		paling.mesh.geometry.vertices[1].x -= 5;
		paling.mesh.geometry.vertices[4].x += 5;
		paling.mesh.geometry.vertices[5].x += 5;
		paling.mesh.updateMatrix();

		singleGeometry.merge(bottomBoard.mesh.geometry, bottomBoard.mesh.matrix);
		singleGeometry.merge(centerBoard.mesh.geometry, centerBoard.mesh.matrix);
		singleGeometry.merge(topBoard.mesh.geometry, topBoard.mesh.matrix);
		singleGeometry.merge(paling.mesh.geometry, paling.mesh.matrix);


		this.width = 38;

		this.mesh = new Mesh(
			singleGeometry,
			materials.wood
		);

		this.mesh.position.y += 10;
	}
}