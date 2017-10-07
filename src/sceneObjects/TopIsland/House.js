import { Geometry, Mesh, Object3D, CylinderGeometry } from 'three';

import Cube from '../../modules/Cube';

import { colors } from '../../modules/colors';

import { materials } from '../../modules/materials';


export default class House {
	constructor() {

		this.mesh = new Object3D();
		this.mesh.name = 'house';

		// stage
		const size = {
			x: 140,
			y: 70,
			z: 120
		};
		const firstFloor = new Cube(
			[size.x, size.y, size.z],
			{x: 0, y: (size.y / 2), z: -100},
			colors.brick,
			'first-floor'
		);

		// roof
		const roof = new Cube(
			[(size.x + 10), (size.y / 2), (size.z + 10)],
			{x: 0, y: size.y + (size.y / 4), z: -100},
			colors.roof,
			'roof'
		);

		roof.mesh.geometry.vertices[0].x -= 20;
		roof.mesh.geometry.vertices[0].z -= ((size.x - 10) / 2);

		roof.mesh.geometry.vertices[1].x -= 20;
		roof.mesh.geometry.vertices[1].z += ((size.x - 10) / 2);

		roof.mesh.geometry.vertices[4].x += 20;
		roof.mesh.geometry.vertices[4].z += ((size.x - 10) / 2);

		roof.mesh.geometry.vertices[5].x += 20;
		roof.mesh.geometry.vertices[5].z -= ((size.x - 10) / 2);


		// stairs
		const stairsGeometry = new Geometry();

		const backSide = new Cube(
			[5, (size.y / 2), 20],
			{x: -(size.x / 2 - (5 / 2)), y: ((size.y / 2) / 2), z: -30},
			colors.darkMetal
		);

		const leftSide = new Cube(
			[size.x, (size.y / 2), 5],
			{x: 0, y: ((size.y / 2) / 2), z: -20},
			colors.darkMetal
		);
		leftSide.mesh.geometry.vertices[0].x -= (size.x * (3 / 4) - 20);
		leftSide.mesh.geometry.vertices[1].x -= (size.x * (3 / 4) - 20);
		leftSide.mesh.updateMatrix();


		for (let i = 1; i <= 6; i++) {
			
			let stepWidth = (size.x / 8);
			let stepHeight = i * (2 / 3) * (size.y / 2) / 6
			
			const step = new Cube(
				[stepWidth, stepHeight, 20],
				{x: (size.x / 2) - (i * stepWidth), y: (stepHeight / 2), z: -30},
				colors.darkMetal
			);

			stairsGeometry.merge(step.mesh.geometry, step.mesh.matrix);
		};

		const staircase = new Cube(
			[(size.x / 4), (size.y / 3), 20],
			{x: -(size.x / 2) + (size.x / 4) / 2, y: ((size.y / 3) / 2), z: -30},
			colors.darkMetal
		);


		stairsGeometry.merge(leftSide.mesh.geometry, leftSide.mesh.matrix);
		stairsGeometry.merge(backSide.mesh.geometry, backSide.mesh.matrix);
		stairsGeometry.merge(staircase.mesh.geometry, staircase.mesh.matrix);

		const stairs = new Mesh(stairsGeometry, materials.darkMetal);
		stairs.name = 'stairs';
		stairs.receiveShadow = true;
		stairs.castShadow = true;


		// chimney
		const chimneyGeometry = new CylinderGeometry(10, 10, 80, 4, 1, true);

		const chimney = new Mesh(chimneyGeometry, materials.brick);
		chimney.name = 'chimney';

		chimney.castShadow = true;
		chimney.receiveShadow = true;
		chimney.doubleSided = true;
		chimney.position.x += (size.x / 4);
		chimney.position.y += size.y + 20;
		chimney.position.z -= size.z;
	
		chimney.rotation.y = Math.PI / 4;


		// windows
		const leftWindow = new Cube(
			[2, 20, 30],
			{x: (size.x / 2), y: (size.y / 2) + 10, z: -(size.z + 10)},
			colors.white,
			'window'
		);
	
		const rightWindow = leftWindow.mesh.clone();
		rightWindow.position.z += 60;


		// the doors
		const frontDoor = new Cube(
			[2, 30, 20],
			{x: (size.x / 2), y: 15, z: -100},
			colors.lightMetal,
			'door'
		);

		const sideDoor = frontDoor.mesh.clone();
		sideDoor.position.set(-(size.x / 2) + 20, (size.y) - 30, -40);
		sideDoor.rotation.y += Math.PI / 2;


		// final
		this.mesh.add(
			firstFloor.mesh,
			frontDoor.mesh,
			sideDoor,
			leftWindow.mesh,
			rightWindow,
			roof.mesh,
			stairs,
			chimney,
		);
	}
}