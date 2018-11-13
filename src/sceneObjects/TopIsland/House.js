import {
	Geometry,
	Mesh,
	Object3D,
	CylinderGeometry,
	ExtrudeGeometry,
	Shape,
	Path
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

		
		// roof parts
		const roofCombinedGeometry = new Geometry();

		const roofParams = [
			{ y: 20,  rT: 50, rB: 100, height: 40 },
			{ y: 70,  rT: 20, rB: 50,  height: 60 },
			{ y: 110, rT: 15, rB: 20,  height: 20 },
			{ y: 130, rT: 30, rB: 15,  height: 10 },
			{ y: 145, rT: 10, rB: 30,  height: 20 },
			{ y: 165, rT: 1,  rB: 10,  height: 20 },
		];

		for (let i = 0; i < roofParams.length; i++) {
			const roofPart = new Mesh(
				new CylinderGeometry(
					roofParams[i].rT,
					roofParams[i].rB,
					roofParams[i].height,
					4, 1
				),
			);
			roofPart.position.y += roofParams[i].y;
			roofPart.updateMatrix();
			roofCombinedGeometry.merge(roofPart.geometry, roofPart.matrix);
		};

		const roofCombined = new Mesh(roofCombinedGeometry, materials.roof);
		roofCombined.castShadow = true;
		roofCombined.receiveShadow = true;

		roof.add(roofCombined);

		
		// chimneys
		const chimneyCombinedGeometry = new Geometry();

		const chimneyParams = [
			{ x: 0, y: 100, z: -70, width: 30, height: 50 },
			{ x: -10, y: 120, z: -80, width: 20, height: 80 }
		];

		for (let i = 0; i < chimneyParams.length; i++) {
			const chimney = (new Chimney(
				chimneyParams[i].width,
				chimneyParams[i].height
			)).mesh;
			chimney.position.set(
				chimneyParams[i].x,
				chimneyParams[i].y,
				chimneyParams[i].z
			);
			chimney.updateMatrix();
	
			chimneyCombinedGeometry.merge(chimney.geometry, chimney.matrix);
		};

		const chimneyCombined = new Mesh(
			chimneyCombinedGeometry, materials.lightMetal
		);
		chimneyCombined.castShadow = true;
		chimneyCombined.receiveShadow = true;


		// door
		const doorShape = new Shape();

		doorShape.moveTo(15, -15);
		doorShape.lineTo(15, 15);

		for (let i = 0; i < 8; i++) {
			doorShape.lineTo(
				15 * Math.cos( i * Math.PI / 8 ),
				10 * Math.sin( i * Math.PI / 8 ) + 15
			);
		};

		doorShape.lineTo(-15, -15);
		doorShape.moveTo(-15, 15);

		const extrudeSettings = {
			steps: 2,
			depth: 4,
			bevelEnabled: false
		};

		const door = new Mesh(
			new ExtrudeGeometry(doorShape, extrudeSettings),
			materials.wood
		);
		door.castShadow = true;
		door.receiveShadow = true;

		door.position.set(70, 15, -125);
		door.rotation.y = Math.PI / 2;


		// window
		const windowShape = new Shape();
		windowShape.moveTo(0, 0);
		windowShape.absarc(0, 0, 15, 0, Math.PI * 2);

		const holePath = new Path();
		holePath.moveTo(0, 0);
		holePath.absarc(0, 0, 12, 0, Math.PI * 2);
		windowShape.holes.push( holePath );

		const windowGeometry = new ExtrudeGeometry(
			windowShape,
			{
				depth: 4,
				steps: 1,
				bevelEnabled: false
			}
		);

		const horizontalFrame = new Cube([1, 30, 4]);
		const verticalFrame = new Cube([30, 1, 4]);

		windowGeometry.merge(horizontalFrame.geometry, horizontalFrame.matrix);
		windowGeometry.merge(verticalFrame.geometry, verticalFrame.matrix);
		
		const houseWindow = new Mesh(windowGeometry, materials.wood);
		houseWindow.position.set(70, 25, -65);
		houseWindow.rotation.y = Math.PI / 2;
		houseWindow.scale.x = 1.15

		houseWindow.receiveShadow = true;
		houseWindow.castShadow = true;



		// final
		this.mesh.add(
			basement,
			firstFloor,
			door,
			houseWindow,
			roof,
			chimneyCombined
		);
	}
}