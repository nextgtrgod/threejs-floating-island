import { Geometry, Mesh, Object3D, CylinderGeometry  } from 'three';

import { materials } from '../modules/materials';


export default class Pine {
	constructor(scale = [1, 1, 1], rotation = 0) {

		this.mesh = new Object3D();
		this.mesh.name = 'pine';

		// tree trunk
		const trunkGeometry = new CylinderGeometry(8, 8, 15, 10, 1);

		const trunk = new Mesh(trunkGeometry, materials.wood);
		trunk.castShadow = true;
		trunk.receiveShadow = true;
		trunk.position.y += 7.5;


		// branches
		const branchesGeometry = new Geometry();

		for (let i = 1; i <= 7; i++) {
			let R = 45 - (i * 5); 
			const branchesLevel = new Mesh(new CylinderGeometry((R - 10), R, 10, 6, 1));

			branchesLevel.position.y += 10 + (i * 70) / 7;

			branchesLevel.updateMatrix();

			branchesGeometry.merge(branchesLevel.geometry, branchesLevel.matrix);
		};
		const branches = new Mesh(branchesGeometry, materials.green);
		branches.receiveShadow = true;
		branches.castShadow = true;


		this.mesh.scale.x = scale[0];
		this.mesh.scale.y = scale[1];
		this.mesh.scale.z = scale[2];

		this.mesh.rotation.y = rotation; 

		this.mesh.add(
			trunk,
			branches
		);

	}
}