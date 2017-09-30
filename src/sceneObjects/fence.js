import { Object3D } from 'three';

import Cube from '../modules/Cube';

import { colors } from '../modules/colors';


export default class Fence {
	constructor(close = false) {

		this.mesh = new Object3D();

		const centerBoard = new Cube(
			[10, 20, 4],
			{x: 0, y: 0, z: 0},
			colors.wood
		);

		const topBoard = new Cube(
			[28, 4, 2],
			{x: -((28 / 2) + (10 / 2)), y: (10 - 4 / 2), z: 0},
			colors.wood
		);

		const bottomBoard = new Cube(
			[28, 4, 2],
			{x: -((28 / 2) + (10 / 2)), y: -3, z: 0},
			colors.wood
		);

		const paling = new Cube(
			[10, 6, 4],
			{x: 0, y: 13, z: 0},
			colors.wood
		);

		paling.mesh.geometry.vertices[0].x -= 5;
		paling.mesh.geometry.vertices[1].x -= 5;
		paling.mesh.geometry.vertices[4].x += 5;
		paling.mesh.geometry.vertices[5].x += 5;

		// need to close the fence
		if (close) {

			const lastBoard = new Cube(
				[10, 20, 4],
				{x: - 28, y: 0, z: 0},
				colors.wood
			);

			const lastPaling = new Cube(
				[10, 6, 4],
				{x: - 28, y: 13, z: 0},
				colors.wood
			);
	
			lastPaling.mesh.geometry.vertices[0].x -= 5;
			lastPaling.mesh.geometry.vertices[1].x -= 5;
			lastPaling.mesh.geometry.vertices[4].x += 5;
			lastPaling.mesh.geometry.vertices[5].x += 5;

			this.mesh.add(lastPaling.mesh, lastBoard.mesh);
		};


		this.width = 38;

		this.mesh.position.y += 10;

		this.mesh.add(
			centerBoard.mesh,
			topBoard.mesh,
			bottomBoard.mesh,
			paling.mesh
		);

	}
}