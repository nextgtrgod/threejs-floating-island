import { Mesh, Object3D, CylinderGeometry, MeshPhongMaterial, DoubleSide } from 'three';

import Cube from '../../modules/Cube';

import { colors } from '../../modules/colors';


export default class House {
	constructor() {

		this.mesh = new Object3D();

		// stage
		const size = {
			x: 140,
			y: 70,
			z: 120
		};
		const firstFloor = new Cube(
			[size.x, size.y, size.z],
			{x: 0, y: (size.y / 2), z: -100},
			colors.brick
		);

		// roof
		const roof = new Cube(
			[(size.x + 10), (size.y / 2), (size.z + 10)],
			{x: 0, y: size.y + (size.y / 4), z: -100},
			colors.roof
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
		const stairs = new Object3D();

		const backSide = new Cube(
			[5, (size.y / 2), 20],
			{x: -(size.x / 2 - (5 / 2)), y: ((size.y / 2) / 2), z: -30},
			colors.darkGrey
		);

		const leftSide = new Cube(
			[size.x, (size.y / 2), 5],
			{x: 0, y: ((size.y / 2) / 2), z: -20},
			colors.darkGrey
		);

		leftSide.mesh.geometry.vertices[0].x -= (size.x * (3 / 4) - 20);
		leftSide.mesh.geometry.vertices[1].x -= (size.x * (3 / 4) - 20);

		const steps = [];

		for (let i = 1; i <= 6; i++) {
			
			let stepWidth = (size.x / 8);
			let stepHeight = i * (2 / 3) * (size.y / 2) / 6
			
			const step = new Cube(
				[stepWidth, stepHeight, 20],
				{x: (size.x / 2) - (i * stepWidth), y: (stepHeight / 2), z: -30},
				colors.darkGrey
			);

			steps.push(step.mesh);
		};

		const staircase = new Cube(
			[(size.x / 4), (size.y / 3), 20],
			{x: -(size.x / 2) + (size.x / 4) / 2, y: ((size.y / 3) / 2), z: -30},
			colors.darkGrey
		);

		stairs.add(
			backSide.mesh,
			leftSide.mesh,
			...steps,
			staircase.mesh
		);


		// chimney
		const chimneyGeometry = new CylinderGeometry(10, 10, 80, 4, 1, true);
		const chimneyMaterial = new MeshPhongMaterial({
			color: colors.brick,
			flatShading: true,
			side: DoubleSide
		});

		const chimney = new Mesh(chimneyGeometry, chimneyMaterial);
		chimney.doubleSided = true;
		chimney.position.x += (size.x / 4);
		chimney.position.y += size.y + 20;
		chimney.position.z -= size.z;
	
		chimney.rotation.y = Math.PI / 4;



		// final
		this.mesh.add(
			firstFloor.mesh,
			roof.mesh,
			stairs,
			chimney
		);
	}
}