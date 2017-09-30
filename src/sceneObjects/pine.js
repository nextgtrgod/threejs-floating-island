import { Mesh, Object3D, CylinderGeometry, MeshPhongMaterial,  } from 'three';

import { colors } from '../modules/colors';


export default class Pine {
	constructor(scale = [1, 1, 1], rotation = 0) {

		this.mesh = new Object3D();

		// tree trunk
		const trunkGeometry = new CylinderGeometry(8, 8, 15, 10, 1);
		const trunkMaterial = new MeshPhongMaterial({
			color: colors.wood,
			flatShading: true
		});

		const trunk = new Mesh(trunkGeometry, trunkMaterial);
		trunk.castShadow = true;
		trunk.receiveShadow = true;
		trunk.position.y += 7.5;


		// branches
		const greenMaterial = new MeshPhongMaterial({
			color: colors.darkGreen,
			flatShading: true
		});

		for (let i = 1; i <= 7; i++) {
			let R = 45 - (i * 5); 
			const branchesLevel = new Mesh((new CylinderGeometry((R - 10), R, 10, 6, 1)), greenMaterial);
			branchesLevel.castShadow = true;
			branchesLevel.receiveShadow = true;

			branchesLevel.position.y += 10 + (i * 70) / 7;

			this.mesh.add(branchesLevel);
		};

		this.mesh.scale.x = scale[0];
		this.mesh.scale.y = scale[1];
		this.mesh.scale.z = scale[2];

		this.mesh.rotation.y = rotation; 

		this.mesh.add(
			trunk
		);

	}
}