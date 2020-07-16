import { Geometry, Mesh } from 'three';

import Cube from '../../modules/Cube';
import { materials } from '../../modules/materials';


export default class Ladder {
	constructor() {

		const ladderGeometry = new Geometry();

		const pillar = new Cube(
				[5, 410, 5],
				{x: 0, y: 205, z: 0}
		).mesh;

		ladderGeometry.merge(pillar.geometry, pillar.matrix);

		const anotherPillar = pillar.clone();
		anotherPillar.position.z -= 30;
		anotherPillar.updateMatrix();

		ladderGeometry.merge(anotherPillar.geometry, anotherPillar.matrix);


		// stairs
		for (let i = 0; i < 40; i++) {
			const stair = new Cube(
				[2, 2, 30],
				{x: 0, y: (i * 10) + 10, z: -15}
			).mesh;

			ladderGeometry.merge(stair.geometry, stair.matrix);
		};


		this.mesh = new Mesh(ladderGeometry, materials.wood);
		this.mesh.castShadow = true;
		this.mesh.receiveShadow = true;

	}
};