import { Mesh, Object3D, Geometry, CylinderGeometry } from 'three';

import Cube from '../../modules/Cube';
import { colors } from '../../modules/colors';
import { materials } from '../../modules/materials';
import PipeCorner from '../pipeCorner';

import Chimney from './chimney';
import Fence from './fence';
import Filter from './filter';


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
		const chimneyCombinedGeometry = new Geometry();

		const chimneysParams = [
			{x: 120, y: 350, z: -120, scale: 150},
			{x: 135, y: 270, z: -90, scale: 70},
			{x: 95,  y: 245, z: -70, scale: 50},
			{x: 80,  y: 240, z: 70,  scale: 40},
			{x: 90,  y: 230, z: 100, scale: 30},
			{x: 120, y: 220, z: 80,  scale: 20},
			{x: -130, y: 320, z: -110, scale: 140},
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
			chimney.updateMatrix();

			chimneyCombinedGeometry.merge(chimney.geometry, chimney.matrix);
		};


		// big chimney!
		const bigChimneyGeometry = new Geometry();

		const chimneyInner = new Mesh(
			new CylinderGeometry(35, 35, 70, 20, 1)
		);
		chimneyInner.position.set(0, -50, 0);
		chimneyInner.updateMatrix();

		const chimneyOuter = (new Chimney()).mesh;
		chimneyOuter.scale.set(3.5, 3.5, 150); // XZY
		chimneyOuter.updateMatrix();

		bigChimneyGeometry.merge(chimneyInner.geometry, chimneyInner.matrix);
		bigChimneyGeometry.merge(chimneyOuter.geometry, chimneyOuter.matrix);

		const bigChimney = new Mesh(bigChimneyGeometry, materials.rust);

		bigChimney.position.set(-125, 325, 90);
		bigChimney.updateMatrix();

		
		chimneyCombinedGeometry.merge(bigChimney.geometry, bigChimney.matrix);

		const chimneyCombined = new Mesh(chimneyCombinedGeometry, materials.rust);
		chimneyCombined.castShadow = true;
		chimneyCombined.receiveShadow = true;

		this.mesh.add(chimneyCombined);



		// pipe corners
		const pipesParams = [
			{
				position: { x: 0, y: 160, z: 200 },
				rotation: { x: 0, y: (Math.PI / 2), z: 0 }
			},
			{
				position: { x: 0, y: 0, z: 200 },
				rotation: { x: 0, y: (Math.PI / 2), z: Math.PI }
			},
			{
				position: { x: 220, y: -75, z: 0 },
				rotation: { x: (Math.PI / 2), y: (Math.PI / 2), z: 0 }
			},
			{
				position: { x: 230, y: -75, z: -40 },
				rotation: { x: (Math.PI / 2), y: Math.PI, z: 0 }
			}
		];

		for (let i = 0; i < pipesParams.length; i++) {

			const pipeCorner = (new PipeCorner()).mesh;
			
			pipeCorner.position.set(
				pipesParams[i].position.x,
				pipesParams[i].position.y,
				pipesParams[i].position.z
			);

			pipeCorner.rotation.set(
				pipesParams[i].rotation.x,
				pipesParams[i].rotation.y,
				pipesParams[i].rotation.z,
				'ZYX'
			);

			this.mesh.add(pipeCorner);
		};


		// fence
		const fenceParams = [
			{
				position: { x: 195, y: 245, z: -195 },
				rotation: { x: 0, y: 0, z: 0 }
			},
			{
				position: { x: 195, y: 245, z: (-195 + 130) },
				rotation: { x: 0, y: 0, z: 0 }
			},
			{
				position: { x: 195, y: 245, z: (-195 + 130 * 2) },
				rotation: { x: 0, y: 0, z: 0 }
			},

			{
				position: { x: 195, y: 245, z: 195 },
				rotation: { x: 0, y: (-Math.PI / 2), z: 0 },
				isClosed: true
			},
			{
				position: { x: (195 - 130 * 2), y: 245, z: 195 },
				rotation: { x: 0, y: (-Math.PI / 2), z: 0 },
				isClosed: true
			},

			{
				position: { x: -195, y: 245, z: -195 },
				rotation: { x: 0, y: 0, z: 0 }
			},
			{
				position: { x: -195, y: 245, z: (-195 + 130) },
				rotation: { x: 0, y: 0, z: 0 }
			},
			{
				position: { x: -195, y: 245, z: (-195 + 130 * 2) },
				rotation: { x: 0, y: 0, z: 0 }
			},
		];

		for (let i = 0; i < fenceParams.length; i++) {
			

			const fence = (new Fence(fenceParams[i].isClosed)).mesh;

			fence.position.set(
				fenceParams[i].position.x,
				fenceParams[i].position.y,
				fenceParams[i].position.z
			);

			fence.rotation.set(
				fenceParams[i].rotation.x,
				fenceParams[i].rotation.y,
				fenceParams[i].rotation.z
			);

			this.mesh.add(fence);
		};


		// water filter
		const filter = (new Filter()).mesh;
		filter.position.set(45, 220, 0);

		this.mesh.add(filter);
		
	}
}