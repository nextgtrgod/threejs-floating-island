import { Mesh, Object3D, Geometry, CylinderGeometry } from 'three';

import Cube from '../../modules/Cube';
import { colors } from '../../modules/colors';
import { materials } from '../../modules/materials';
import PipeCorner from '../pipeCorner';

import Chimney from './chimney';


export default class BottomIsland {
	constructor() {

		this.mesh = new Object3D();
		this.mesh.name = 'bottom-island';

		// big cube
		this.mesh.add(
			(new Cube(
				[400, 400, 400],
				{x: 0, y: 0, z: 0},
				colors.darkGrey)
			).mesh
		);
		this.mesh.position.set(0, -400, 400);


		// chimney
		const chimneysParams = [
			{x: 125, y: 300, z: -80, scale: 100},
			{x: 135, y: 270, z: -50, scale: 70},
			{x: 95,  y: 250, z: -40, scale: 50},
			{x: 80,  y: 240, z: 70,  scale: 40},
			{x: 90,  y: 230, z: 100, scale: 30},
			{x: 120, y: 220, z: 80,  scale: 20},
			{x: -130, y: 300, z: -110, scale: 120},
			{x: -125, y: 270, z: -70, scale: 70},
		];
		

		for (let i = 0; i < chimneysParams.length; i++) {
			
			const chimney = (new Chimney()).mesh;
			chimney.position.set(
				chimneysParams[i].x,
				chimneysParams[i].y,
				chimneysParams[i].z,
			);
			chimney.scale.z = chimneysParams[i].scale;

			this.mesh.add(chimney);
		};


		const bigChimneyGeometry = new Geometry();

		const chimneyInner = new Mesh(
			new CylinderGeometry(35, 35, 70, 20, 1),
			materials.rust
		);
		chimneyInner.position.set(0, -50, 0);
		chimneyInner.updateMatrix();

		const chimneyOuter = (new Chimney()).mesh;
		chimneyOuter.scale.set(3.5, 3.5, 100); // XZY
		chimneyOuter.updateMatrix();

		bigChimneyGeometry.merge(chimneyInner.geometry, chimneyInner.matrix);
		bigChimneyGeometry.merge(chimneyOuter.geometry, chimneyOuter.matrix);

		const bigChimney = new Mesh(bigChimneyGeometry, materials.rust);
		bigChimney.castShadow = true;
		bigChimney.receiveShadow = true;
		bigChimney.position.set(-125, 300, 90);

		this.mesh.add(bigChimney);



		// pipe corners
		const pipesParam = [
			{
				position: { x: 0, y: 160, z: 180 },
				rotation: { x: 0, y: (Math.PI / 2), z: 0 }
			},
			{
				position: { x: 0, y: 0, z: 180 },
				rotation: { x: 0, y: (Math.PI / 2), z: Math.PI }
			},
			{
				position: { x: 200, y: -60, z: 0 },
				rotation: { x: (Math.PI / 2), y: (Math.PI / 2), z: 0 }
			},
			{
				position: { x: 210, y: -60, z: 10 },
				rotation: { x: (Math.PI / 2), y: Math.PI, z: 0 }
			}
		];

		for (let i = 0; i < pipesParam.length; i++) {

			const pipeCorner = (new PipeCorner()).mesh;
			
			pipeCorner.position.set(
				pipesParam[i].position.x,
				pipesParam[i].position.y,
				pipesParam[i].position.z
			);

			pipeCorner.rotation.set(
				pipesParam[i].rotation.x,
				pipesParam[i].rotation.y,
				pipesParam[i].rotation.z,
				'ZYX'
			);

			this.mesh.add(pipeCorner);
		};
		
	}
}