import {
	Geometry,
	Mesh,
	Object3D,
	CylinderGeometry
} from 'three';

import Cube from '../../modules/Cube';
import Chimney from './chimney';

import { colors } from '../../modules/colors';

import { materials } from '../../modules/materials';


export default class House {
	constructor() {

		this.mesh = new Object3D();
		this.mesh.name = 'house';

		// stage
		const size = {
			x: 140,
			y: 50,
			z: 140
		};

		// first floor
		const firstFloor = new Cube(
			[size.x, size.y, size.z],
			{x: 0, y: (size.y / 2), z: -100},
			colors.brick,
			'first-floor'
		).mesh;
		firstFloor.castShadow = true;
		firstFloor.receiveShadow = true;

		// basement
		const basement = new Cube(
			[size.x + 10, size.y / 10, size.z + 10],
			{x: 0, y: (size.y / 20), z: -100},
			colors.darkMetal,
			'basement'
		).mesh;
		basement.castShadow = true;
		basement.receiveShadow = true;

		// roof
		const roof = new Object3D();

		const roofLow = new Mesh(
			new CylinderGeometry( (size.x - 40), (size.x - 35), 5, 4, 1 ),
			materials.brick
		);
		roofLow.position.y -= 2.5;
		roofLow.castShadow = true;
		roofLow.receiveShadow = true;

		const roofMiddle = new Mesh(
			new CylinderGeometry( 20, 20, 5, 4, 1 ),
			materials.brick
		);
		roofMiddle.position.y += 122.5;
		roofMiddle.castShadow = true;
		roofMiddle.receiveShadow = true;

		const roofTop = new Mesh(
			new CylinderGeometry( 15, 15, 5, 4, 1 ),
			materials.brick
		);
		roofTop.position.y += 155;
		roofTop.castShadow = true;
		roofTop.receiveShadow = true;



		roof.add(
			roofLow,
			roofMiddle,
			roofTop
		);
		roof.position.set(0, size.y, -100),
		roof.rotation.y += Math.PI / 4;

		
		const roofCombinedGeometry = new Geometry();

		// roof parts
		{
			const roofPart = new Mesh(
				new CylinderGeometry( (size.x - 90), (size.x - 40), 40, 4, 1 ),
			);
			roofPart.position.y += 20;
			roofPart.updateMatrix();
			roofCombinedGeometry.merge(roofPart.geometry, roofPart.matrix);
		};

		{
			const roofPart = new Mesh(
				new CylinderGeometry( (size.x - 120), (size.x - 90), 60, 4, 1 ),
			);
			roofPart.position.y += 70;
			roofPart.updateMatrix();
			roofCombinedGeometry.merge(roofPart.geometry, roofPart.matrix);
		};

		{
			const roofPart = new Mesh(
				new CylinderGeometry( (size.x - 125), (size.x - 120), 20, 4, 1 ),
			);
			roofPart.position.y += 110;
			roofPart.updateMatrix();
			roofCombinedGeometry.merge(roofPart.geometry, roofPart.matrix);
		};

		
		{
			const roofPart = new Mesh(
				new CylinderGeometry( 30, 15, 10, 4, 1 ),
			);
			roofPart.position.y += 130;
			roofPart.updateMatrix();
			roofCombinedGeometry.merge(roofPart.geometry, roofPart.matrix);
		};

		{
			const roofPart = new Mesh(
				new CylinderGeometry( 10, 30, 20, 4, 1 ),
			);
			roofPart.position.y += 145;
			roofPart.updateMatrix();
			roofCombinedGeometry.merge(roofPart.geometry, roofPart.matrix);
		};

		{
			const roofPart = new Mesh(
				new CylinderGeometry( 1, 10, 20, 4, 1 ),
			);
			roofPart.position.y += 165;
			roofPart.updateMatrix();
			roofCombinedGeometry.merge(roofPart.geometry, roofPart.matrix);
		};


		const roofCombined = new Mesh(roofCombinedGeometry, materials.roof);
		roofCombined.castShadow = true;
		roofCombined.receiveShadow = true;

		roof.add(roofCombined);

		
		// chimneys
		const chimneyCombinedGeometry = new Geometry();
		{
			const chimney = (new Chimney(30, 50)).mesh;
			chimney.position.set(0, 100, -70);
			chimney.updateMatrix();

			chimneyCombinedGeometry.merge(chimney.geometry, chimney.matrix);
		};

		{
			const chimney = (new Chimney(20, 80)).mesh;
			chimney.position.set(-10, 120, -80);
			chimney.updateMatrix();

			chimneyCombinedGeometry.merge(chimney.geometry, chimney.matrix);
		};

		const chimneyCombined = new Mesh(
			chimneyCombinedGeometry, materials.lightMetal
		);
		chimneyCombined.castShadow = true;
		chimneyCombined.receiveShadow = true;


		// final
		this.mesh.add(
			basement,
			firstFloor,
			roof,
			chimneyCombined
		);
	}
}